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
    public class CategoryBll
    {
        public CategoryModel GetCategoryModel(int id)
        {

            CategoryModel model = new CategoryModel();
            using (var ctx = new CompanyWebContext())
            {
                model = ctx.Categorys.FirstOrDefault(a => a.CategoryId == id);
            }
            return model;

        }
        public List<CategoryModel> GetCategoryModelList()
        {

            List<CategoryModel> model = new List<CategoryModel>();
            using (var ctx = new CompanyWebContext())
            {
                model = ctx.Categorys.Where(a => 1 == 1).ToList();
            }
            return model;

        }
        public List<CategoryModel> UpdateCategoryModel(int id, CategoryModel updateModel)
        {

            List<CategoryModel> model = new List<CategoryModel>();
            using (var ctx = new CompanyWebContext())
            {
                var d = ctx.Dicts.FirstOrDefault(m => m.CompanyId == id);
                updateModel.CategoryId = id;
                var info = typeof(CategoryModel);
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

        public int AddCategoryModel(CategoryModel updateModel)
        {
            int rows = 0;
            List<CategoryModel> model = new List<CategoryModel>();
            using (var ctx = new CompanyWebContext())
            {
                var d = ctx.Categorys.Add(updateModel);
                rows = ctx.SaveChanges();
            }
            return rows;

        }
        public int DeleteCategory(int id)
        {
            int rows = 0;
            List<CategoryModel> model = new List<CategoryModel>();
            using (var ctx = new CompanyWebContext())
            {
                var delmodel = new CategoryModel() { CategoryId = id };
                ctx.Categorys.Attach(delmodel);
                ctx.Categorys.Remove(delmodel);
                rows = ctx.SaveChanges();
            }
            return rows;

        }
    }
}
