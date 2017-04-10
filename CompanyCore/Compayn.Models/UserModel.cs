
using System;
using System.ComponentModel.DataAnnotations;
namespace Company.Models
{
    
    public  class UserModel
    {
        [Key]
        public  int UserId { get; set; }

        public string Account { get; set; }

        public string Pwd { get; set; }

        public DateTime CreateTime { get; set; }

        public DateTime LastLoginTime { get; set; }
    }
}
