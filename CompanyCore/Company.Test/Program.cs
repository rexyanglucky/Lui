using Company.Dal;
using Company.Models;
using System;
using System.IO;
using System.Collections.Generic;

namespace Company.Test
{
    class Program
    {
        static void Main(string[] args)
        {
Console.WriteLine(Directory.GetCurrentDirectory());
            List<string> strlist = new List<string>();
            ChangeList(strlist);
            Console.WriteLine(strlist.Count);
            
            Console.Read();
            //using (var db = new CompanyWebContext())
            //{
            //    db.Products.Add(new ProductModel
            //    {
            //        ProductName = "name",
            //        ProductDesc = "desc",
            //        ProductImg = "",
            //        ProductDetailImg = "",
            //        CategoryId = 0,
            //        CategoryModel = null

            //    });
            //    var count = db.SaveChanges();
            //    Console.WriteLine("{0} records saved to database", count);
            //}
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
        static void ChangeList(List<string> strlist) {
            //strlist = new List<string>() { "abc" };
            strlist.Add("abc");
        }
    }
}