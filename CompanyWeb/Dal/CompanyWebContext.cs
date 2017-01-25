using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Configuration;
using System.Data.Entity.Migrations;
using Company.Models;

namespace CompanyWeb.Dal
{
    public class CompanyWebContext:DbContext
    {
        public virtual DbSet<ProductModel> Products { get; set; }
        public virtual DbSet<CategoryModel> Categorys { get; set; }
        public virtual DbSet<UserModel> Users { get; set; }


        public virtual DbSet<DictionaryModel> Dicts { get; set; }
        public virtual DbSet<SaleUserModel> SaleUsers { get; set; }

        public CompanyWebContext() { }
        static CompanyWebContext()
        {
            Database.SetInitializer(new MigrateDatabaseToLatestVersion<CompanyWebContext,  Configuration>());
        }
       
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            //modelBuilder.Entity<CategoryModel>()
            //    .HasMany(e => e.ProductModel)
            //    .WithOptional(e => e.CategoryModel)
            //    .HasForeignKey(e => e.CategoryInfo_ProductId);
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
        }
    }

    internal sealed class Configuration : DbMigrationsConfiguration<CompanyWebContext>
    {
        public Configuration()
        {
            

            AutomaticMigrationsEnabled = true;
            AutomaticMigrationDataLossAllowed = true;
           
            //ContextKey = "Survery.DAL.SurveryContext";
        }



    }
}