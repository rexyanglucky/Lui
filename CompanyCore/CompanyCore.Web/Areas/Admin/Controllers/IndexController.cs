using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Company.Bll;

namespace CompanyWeb.Areas.Admin.Controllers
{
    public class IndexController : Controller
    {
        // GET: Admin/Index
        public ActionResult Index()
        {
            var bll = new CategoryBll();
            var dictlist = bll.GetCategoryModelList();
            return View(dictlist);

        }
    }
}