namespace Company.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;


    [Table("CategoryModel")]
    public partial class CategoryModel
    {

        [Key]
        public int CategoryId { get; set; }

        public string CategoryName { get; set; }


    }
}
