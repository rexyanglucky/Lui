namespace CompanyWebCore
{
    public class AppSettings
    {
        public WebSocketConfig WebSocketConfig { get; set; }

    }
    public class WebSocketConfig
    {
        //单次发送最大值
        public int MaxLenth { get; set; }
        //to和data的分割符号
        public string Separator { get; set; }
    }
}