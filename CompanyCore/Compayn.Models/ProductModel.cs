using System.ComponentModel.DataAnnotations;
namespace Company.Models
{
    public  class ProductModel
    {
        [Key]
        public  int ProductId { get; set; }

        public string ProductName { get; set; }

        public string ProductDesc { get; set; }

        public string ProductImg { get; set; }

        public string ProductDetailImg { get; set; }

        public int CategoryId { get; set; }

        public CategoryModel CategoryModel { get; set; }
    }
}
