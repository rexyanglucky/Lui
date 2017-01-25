namespace Company.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;


    [Table("SaleUserModel")]
    public partial class SaleUserModel
    {
        [Key]
        public int SaleUserId { get; set; }

        public string SaleUserName { get; set; }

        public string SaleUserPhone { get; set; }

        public int CompanyId { get; set; }
        public DictionaryModel Company { get; set; }
    }
}
