using Company.Models;
using CompanyWeb.Dal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace Bll
{
    public class ProductBll
    {
        
        public ProductModel GetProductModel(int id)
        {

            ProductModel model = new ProductModel();
            using (var ctx = new CompanyWebContext())
            {
                model = ctx.Products.FirstOrDefault(a => a.ProductId == id);
            }
            return model;

        }
        public List<ProductModel> GetProductModelList()
        {

            List<ProductModel> model = new List<ProductModel>();
            using (var ctx = new CompanyWebContext())
            {
                model = ctx.Products.Where(a => 1 == 1).ToList();
            }
            return model;

        }
        public List<ProductModel> UpdateProductModel(int id, ProductModel updateModel)
        {

            List<ProductModel> model = new List<ProductModel>();
            using (var ctx = new CompanyWebContext())
            {
                var d = ctx.Dicts.FirstOrDefault(m => m.CompanyId == id);
                updateModel.ProductId = id;
                var info = typeof(ProductModel);
                var propertys = info.GetProperties();
                foreach (var item in propertys)
                {

                    if (item.MemberType == MemberTypes.Property)
                    {
                        item.SetValue(d, item.GetValue(updateModel));
                    }
                }
                ctx.SaveChanges();

            }
            return model;

        }

        public int AddProductModel(ProductModel updateModel)
        {
            int rows = 0;
            List<ProductModel> model = new List<ProductModel>();
            using (var ctx = new CompanyWebContext())
            {
                var d = ctx.Products.Add(updateModel);
                rows = ctx.SaveChanges();
            }
            return rows;

        }
        public int DeleteProduct(int id)
        {
            int rows = 0;
            List<ProductModel> model = new List<ProductModel>();
            using (var ctx = new CompanyWebContext())
            {
                var delmodel = new ProductModel() { ProductId = id };
                ctx.Products.Attach(delmodel);
                ctx.Products.Remove(delmodel);
                rows = ctx.SaveChanges();
            }
            return rows;

        }
    }
}
