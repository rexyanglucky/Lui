using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
namespace Company.Models
{
    
    public class SaleUserModel
    {
        [Key]
        public int SaleUserId { get; set; }

        public string SaleUserName { get; set; }

        public string SaleUserPhone { get; set; }

        public int CompanyId { get; set; }
        public DictionaryModel Company { get; set; }
    }
}
