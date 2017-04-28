using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.WebSockets;
using System.Threading;
using System.Threading.Tasks;
using Company.Models;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;

namespace CompanyWebCore
{
    public class SocketHandler
    {

        static Dictionary<string, WebSocket> userDic = new Dictionary<string, WebSocket>();
        SocketHandler(WebSocket socket)
        {
            this.socket = socket;
            this.BufferSize = AppSettingsServices.AppSettings.WebSocketConfig.MaxLenth;
            // userList.Add(socket);
        }

        int BufferSize;
        WebSocket socket;
        async Task EchoLoop()
        {
            var buffer = new byte[BufferSize];
            var seg = new ArraySegment<byte>(buffer);
            while (this.socket.State == WebSocketState.Open)
            {

                var incoming = await this.socket.ReceiveAsync(seg, CancellationToken.None);

                if (incoming.MessageType == WebSocketMessageType.Close)
                {
                    if(userDic.Values.Contains(this.socket))
                    {
                        userDic.Remove(userDic.FirstOrDefault(m=>m.Value==this.socket).Key);
                    }
                    await socket.CloseAsync(WebSocketCloseStatus.NormalClosure,
                    String.Empty, CancellationToken.None);

                }
                else
                {
                    // string receviceString = System.Text.Encoding.UTF8.GetString(buffer);
                    string receviceString = System.Text.Encoding.UTF8.GetString(buffer.Where(b => b != 0).ToArray());
                    if (string.IsNullOrEmpty(receviceString)) { return; }
                    string separator = AppSettingsServices.AppSettings.WebSocketConfig.Separator;
                    var msg = receviceString.Split(new[] { separator }, StringSplitOptions.None);
                    string toname = string.Empty;
                    string data = string.Empty;
                    string fromname = string.Empty;
                 
                    if (msg.Length > 2)
                    {
                        toname = msg[0];
                        data = msg[1];
                        fromname = msg[2];
                    }
                    string tomsg = data;
                    List<WebSocket> toSocketList = new List<WebSocket>();
                    if (!string.IsNullOrEmpty(toname))
                    {
                        if (!userDic.ContainsKey(fromname))
                        {
                            userDic.Add(fromname, this.socket);
                        }
                        if (userDic.ContainsKey(toname))
                        {
                            toSocketList.Add(userDic[toname]);
                        }
                        else
                        {
                            toSocketList.Add(userDic[fromname]);
                            tomsg = "用户不在线";
                        }
                    }
                    else
                    {
                        toSocketList.AddRange(userDic.Values.ToList());
                    }
                    byte[] toBuffer = System.Text.Encoding.UTF8.GetBytes(tomsg);
                    var outgoing = new ArraySegment<byte>(toBuffer);
                    foreach(WebSocket s in toSocketList){
                      await  s.SendAsync(outgoing, WebSocketMessageType.Text, true, CancellationToken.None);
                    }
                    // await this.socket.SendAsync(outgoing, WebSocketMessageType.Text, true, CancellationToken.None);
                }
            }
        }
        static async Task Acceptor(HttpContext hc, Func<Task> n)
        {
            if (!hc.WebSockets.IsWebSocketRequest)
                return;
            var socket = await hc.WebSockets.AcceptWebSocketAsync();

            var h = new SocketHandler(socket);
            await h.EchoLoop();
        }
        /// <summary>
        /// branches the request pipeline for this SocketHandler usage
        /// </summary>
        /// <param name="app"></param>
        public static void Map(IApplicationBuilder app)
        {

            app.UseWebSockets();
            app.Use(SocketHandler.Acceptor);

        }
    }

}