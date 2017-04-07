using System;
using Company.Dal;
using Company.Models;
namespace MainConsole
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine(test.TestClass.GetTestStr());
            Console.WriteLine("Hello World!");
            Console.Read();

            using (var db = new CompanyWebContext())
            {
              db.Products.Add(new ProductModel{
                  ProductName="name",
                  ProductDesc="desc",
                  ProductImg="",
                  ProductDetailImg="",
                  CategoryId=0,
                  CategoryModel=null
              
                });
                
                //db.Blogs.Add(new Blog { Url = "http://blogs.msdn.com/adonet" });
                var count = db.SaveChanges();
                Console.WriteLine("{0} records saved to database", count);

                //Console.WriteLine();
                //Console.WriteLine("All blogs in database:");
                //foreach (var blog in db.Blogs)
                //{
                //    Console.WriteLine(" - {0}", blog.Url);
                //}
            }
        }
    }
   
}
