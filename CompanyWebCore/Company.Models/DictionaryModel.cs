﻿namespace Company.Models
{
    using System;
    using System.Collections.Generic;




    public  class DictionaryModel
    {

        public virtual int CompanyId { get; set; }

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