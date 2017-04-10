namespace Company.Models
{
    using System;
    using System.Collections.Generic;



    public  class UserModel
    {

        public  int UserId { get; set; }

        public string Account { get; set; }

        public string Pwd { get; set; }

        public DateTime CreateTime { get; set; }

        public DateTime LastLoginTime { get; set; }
    }
}
