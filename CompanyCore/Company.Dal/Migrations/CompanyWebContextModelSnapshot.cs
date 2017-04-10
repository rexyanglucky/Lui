using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Company.Dal;

namespace Company.Dal.Migrations
{
    [DbContext(typeof(CompanyWebContext))]
    partial class CompanyWebContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.1.1");

            modelBuilder.Entity("Company.Models.CategoryModel", b =>
                {
                    b.Property<int>("CategoryId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("CategoryName");

                    b.HasKey("CategoryId");

                    b.ToTable("Categorys");
                });

            modelBuilder.Entity("Company.Models.DictionaryModel", b =>
                {
                    b.Property<int>("CompanyId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("AreaCode");

                    b.Property<string>("BannerUrl");

                    b.Property<string>("CompanyAddress");

                    b.Property<string>("CompanyCopyRight");

                    b.Property<string>("CompanyDesc");

                    b.Property<string>("CompanyImg");

                    b.Property<string>("CompanyLogo");

                    b.Property<string>("CompanyName");

                    b.Property<string>("Email");

                    b.Property<string>("Fax");

                    b.Property<string>("SaleInfo");

                    b.Property<string>("Tel");

                    b.HasKey("CompanyId");

                    b.ToTable("Dicts");
                });

            modelBuilder.Entity("Company.Models.ProductModel", b =>
                {
                    b.Property<int>("ProductId")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("CategoryId");

                    b.Property<string>("ProductDesc");

                    b.Property<string>("ProductDetailImg");

                    b.Property<string>("ProductImg");

                    b.Property<string>("ProductName");

                    b.HasKey("ProductId");

                    b.HasIndex("CategoryId");

                    b.ToTable("Products");
                });

            modelBuilder.Entity("Company.Models.SaleUserModel", b =>
                {
                    b.Property<int>("SaleUserId")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("CompanyId");

                    b.Property<string>("SaleUserName");

                    b.Property<string>("SaleUserPhone");

                    b.HasKey("SaleUserId");

                    b.HasIndex("CompanyId");

                    b.ToTable("SaleUsers");
                });

            modelBuilder.Entity("Company.Models.UserModel", b =>
                {
                    b.Property<int>("UserId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Account");

                    b.Property<DateTime>("CreateTime");

                    b.Property<DateTime>("LastLoginTime");

                    b.Property<string>("Pwd");

                    b.HasKey("UserId");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("Company.Models.ProductModel", b =>
                {
                    b.HasOne("Company.Models.CategoryModel", "CategoryModel")
                        .WithMany()
                        .HasForeignKey("CategoryId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Company.Models.SaleUserModel", b =>
                {
                    b.HasOne("Company.Models.DictionaryModel", "Company")
                        .WithMany()
                        .HasForeignKey("CompanyId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
        }
    }
}
