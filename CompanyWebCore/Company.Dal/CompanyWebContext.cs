// using Microsoft.EntityFrameworkCore;
// using MySQL.Data.EntityFrameworkCore.Extensions;
// using Company.Models;
// namespace Company.Dal
// {
//     public class CompanyWebContext : DbContext
//     {
//         public virtual DbSet<ProductModel> Products { get; set; }
//         public virtual DbSet<CategoryModel> Categorys { get; set; }
//         public virtual DbSet<UserModel> Users { get; set; }


//         public virtual DbSet<DictionaryModel> Dicts { get; set; }
//         public virtual DbSet<SaleUserModel> SaleUsers { get; set; }

//         public CompanyWebContext() { }

//         protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
//         {
//             optionsBuilder.UseMySQL(@"Server=192.168.26.135;database=company;uid=root;pwd=123456");
//         }
//     }
// }
