﻿namespace Company.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;


    [Table("DictionaryModel")]
    public partial class DictionaryModel
    {
        [Key]
        public int CompanyId { get; set; }

        public string CompanyName { get; set; }

        public string CompanyLogo { get; set; }

        public string CompanyDesc { get; set; }

        public string BannerUrl { get; set; }

        public string CompanyAddress { get; set; }

        public string CompanyCopyRight { get; set; }

        public string Email { get; set; }

        public string AreaCode { get; set; }

        public string Fax { get; set; }

        public string Tel { get; set; }

        public string SaleInfo { get; set; }
        public string CompanyImg { get; set; }
    }
}
