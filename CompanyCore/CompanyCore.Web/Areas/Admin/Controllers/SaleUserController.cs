using Company.Bll;
using Company.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;

namespace CompanyWeb.Areas.Admin.Controllers
{
    public class SaleUserController : Controller
    {
        // GET: Admin/Category
        public ActionResult Index()
        {

            var bll = new SaleUserBll();
            var dictlist = bll.GetSaleUserModelList();
            return View(dictlist);
        }
        public ActionResult Add()
        {
            ViewBag.CompanyList = new DictInfoBll().GetDictionaryModel();
            return View();
        }
        public ActionResult Save(SaleUserModel model)
        {
            var bll = new SaleUserBll();
            var result = bll.AddSaleUserModel(model);
            if (result > 0)
            {
                return Redirect("/Admin/SaleUser/Index");

            }
            return Redirect("/Admin/SaleUser/Add");

        }
        public ActionResult Del(int id)
        {
            var bll = new SaleUserBll();
            var result = bll.DeleteSaleUser(id);
            return Redirect("/Admin/SaleUser/Index");


        }

    }
}