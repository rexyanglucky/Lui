using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
namespace CompanyWebCore
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var host = new WebHostBuilder()
                .UseKestrel()
                .UseContentRoot(Directory.GetCurrentDirectory())
                .UseIISIntegration()
                .UseStartup<Startup>()
                .UseApplicationInsights()
                .Build();
            if (args.Length > 0) {
                var serviceconfig = args[0];
                if (serviceconfig.Equals("--windows-service"))
                {
                    
                }
            }
            Console.WriteLine(args[0].ToString());

            host.Run();
            
        }
    }
}
