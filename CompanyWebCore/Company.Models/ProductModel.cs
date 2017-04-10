namespace Company.Models
{
    using System;
    using System.Collections.Generic;



    public  class ProductModel
    {

        public  int ProductId { get; set; }

        public string ProductName { get; set; }

        public string ProductDesc { get; set; }

        public string ProductImg { get; set; }

        public string ProductDetailImg { get; set; }

        public int  CategoryId { get; set; }

        public virtual CategoryModel CategoryModel { get; set; }
    }
}
