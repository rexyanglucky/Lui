using Microsoft.EntityFrameworkCore;
using MySQL.Data.EntityFrameworkCore.Extensions;
using Company.Models;
namespace Company.Dal
{
    public class CompanyWebContext : DbContext
    {
        public virtual DbSet<ProductModel> Products { get; set; }
        public virtual DbSet<CategoryModel> Categorys { get; set; }
        public virtual DbSet<UserModel> Users { get; set; }


        public virtual DbSet<DictionaryModel> Dicts { get; set; }
        public virtual DbSet<SaleUserModel> SaleUsers { get; set; }

        public CompanyWebContext() { }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            
            optionsBuilder.UseMySQL(@"Database=company;Data Source=192.168.26.137;Port=3306;User=root;Password=123456;CharSet=utf8;Allow User Variables=True;");
        }
    }
}
