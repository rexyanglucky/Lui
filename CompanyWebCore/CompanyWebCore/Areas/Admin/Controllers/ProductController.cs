using Company.Bll;
using Company.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;

namespace CompanyWeb.Areas.Admin.Controllers
{
    public class ProductController : Controller
    {
        // GET: Admin/Category
        public ActionResult Index()
        {

            var bll = new ProductBll();
            var dictlist = bll.GetProductModelList();
            return View(dictlist);
        }
        public ActionResult Add()
        {
            ViewBag.CategoryList = new CategoryBll().GetCategoryModelList();
            return View();
        }
        public ActionResult Save(ProductModel model)
        {
            var bll = new ProductBll();
            var result = bll.AddProductModel(model);
            if (result > 0)
            {
                return Redirect("/Admin/Product/Index");
            }
            return Redirect("/Admin/Product/Add");
        }
        public ActionResult Del(int id)
        {
            var bll = new ProductBll();
            var result = bll.DeleteProduct(id);
            return Redirect("/Admin/Product/Index");

        }
    }
}