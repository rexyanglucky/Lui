using Company.Dal;
using Company.Models;
using System;

namespace Company.Test
{
    class Program
    {
        static void Main(string[] args)
        {
            using (var db = new CompanyWebContext())
            {
                db.Products.Add(new ProductModel
                {
                    ProductName = "name",
                    ProductDesc = "desc",
                    ProductImg = "",
                    ProductDetailImg = "",
                    CategoryId = 0,
                    CategoryModel = null

                });
                var count = db.SaveChanges();
                Console.WriteLine("{0} records saved to database", count);
            }
            //using (var db = new BlogWebContext())
            //{
            //    db.Blogs.Add(new Blog
            //    {
            //        BlogName = "blog",
            //        //BlogId = 1

            //    });
            //    var count = db.SaveChanges();
            //    Console.WriteLine("{0} records saved to database", count);
            //}
            Console.WriteLine("Hello World!");
            Console.Read();
        }
    }
}