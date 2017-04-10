
using System.ComponentModel.DataAnnotations;
namespace Company.Models
{

    public  class CategoryModel
    {
        [Key]
        public  int CategoryId { get; set; }

        public string CategoryName { get; set; }


    }
}
