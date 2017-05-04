namespace Company.Models
{
    public class AppSettings
    {
        public WebSocketConfig WebSocketConfig { get; set; }
        public BaseConfig BaseConfig { get; set; }

    }
    public class WebSocketConfig
    {
        //单次发送最大值
        public int MaxLenth { get; set; }
        //to和data的分割符号
        public string Separator { get; set; }
    }

    public class BaseConfig
    {
        public string DbConectionString { get; set; }
    }
}