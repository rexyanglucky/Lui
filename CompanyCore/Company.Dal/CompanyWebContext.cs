using Microsoft.EntityFrameworkCore;
using MySQL.Data.EntityFrameworkCore.Extensions;
using Company.Models;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

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

    //public class BlogWebContext : DbContext
    //{
    //    public virtual DbSet<Blog> Blogs { get; set; }
    //    public virtual DbSet<Option> Options { get; set; }

    //    public BlogWebContext() { }
    //    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    //    {
    //        optionsBuilder.UseMySQL(@"Database=company;Data Source=192.168.26.137;Port=3306;User=root;Password=123456;CharSet=utf8;Allow User Variables=True;");
    //    }
    //}
    //public class Blog
    //{
    //    [Key]
    //    public string BlogName { get; set; }
    //    public int BlogId { get; set; }

    //    public virtual List<Option> Options { get; set; }
    //}
    //public class Option
    //{
    //    public string OptionName { get; set; }
    //    public int OptionId { get; set; }
    //}
}
