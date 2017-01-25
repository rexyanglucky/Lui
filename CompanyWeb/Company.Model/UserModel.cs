namespace Company.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;


    [Table("UserModel")]
    public partial class UserModel
    {
        [Key]
        public int UserId { get; set; }

        public string Account { get; set; }

        public string Pwd { get; set; }

        public DateTime CreateTime { get; set; }

        public DateTime LastLoginTime { get; set; }
    }
}
