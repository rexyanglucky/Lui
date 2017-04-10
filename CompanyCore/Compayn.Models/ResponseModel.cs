namespace Company.Models
{
    public class ResponseModel<T> where T : class
    {
        public string Msg { get; set; }

        public string StatusCode { get; set; }
        public T Data { get; set; }

        public int Result { get; set; }
    }
}
