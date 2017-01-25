using Bll;
using Company.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CompanyWeb.Areas.Admin.Controllers
{
    public class CategoryController : Controller
    {
        // GET: Admin/Category
        public ActionResult Index()
        {

            var bll = new CategoryBll();
            var dictlist = bll.GetCategoryModelList();
            return View(dictlist);
        }
        public ActionResult Add()
        {
            return View();
        }
        public ActionResult Save(CategoryModel model)
        {
            var bll = new CategoryBll();
            var result = bll.AddCategoryModel(model);
            if (result > 0)
            {
                return Redirect("/Admin/Category/Index");
            }
            return Redirect("/Admin/Category/Add");

        }
        public ActionResult Del(int id)
        {
            var bll = new CategoryBll();
            var result = bll.DeleteCategory(id);
            return Redirect("/Admin/Category/Index");

        }

    }
}