namespace Company.Models
{
    using System;
    using System.Collections.Generic;



    public  class SaleUserModel
    {

        public  int SaleUserId { get; set; }

        public string SaleUserName { get; set; }

        public string SaleUserPhone { get; set; }

        public int CompanyId { get; set; }
        public DictionaryModel Company { get; set; }
    }
}
