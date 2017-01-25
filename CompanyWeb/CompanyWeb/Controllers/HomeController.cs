using Bll;
using Company.Models;
using CompanyWeb.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CompanyWeb.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            var bll = new DictInfoBll();
            var dictlist = bll.GetDictionaryModel();
            DictionaryModel m = new DictionaryModel();
            if (dictlist.Any())
            {
                m = dictlist[0];
            }
            return View(m);
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}