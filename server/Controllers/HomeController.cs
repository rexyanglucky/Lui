using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace WebApplication.Controllers
{
    public class HomeController : Controller
    {
        static int testflag = 0;
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult About()
        {
             testflag = 1;
            ViewData["Message"] = "Your application description page.";

            return View();
        }

        public async Task<IActionResult> Contact()
        {
            // string a = "";
            // while (true)
            // {
            //     if (testflag == 1)
            //     {
            //         a = "su"; break;
            //     }
            //     System.Threading.Thread.Sleep(1000);
            // }
            ViewData["Message"] = "Your contact page.";

            // return View();
             string a = "";
            await Task.Run(() =>
             {
                 while (true)
                 {
                     if (testflag == 1)
                     {
                         a = "su"; break;
                     }
                 }
             });
             ViewData["Message"] = "Your contact page.";
              return View();

        }

        public IActionResult Error()
        {
            testflag = 1;
            return View();
        }
        // public async Task<JsonResult> TestLongPullAsync()
        // {
        //     string a = "";
        //     await Task.Run(() =>
        //      {
        //          while (true)
        //          {
        //              if (testflag == 1)
        //              {
        //                  a = "su"; break;
        //              }
        //          }
        //      });
        //     return Json(a);
        // }
        public JsonResult TestLongPull()
        {
            
            string a = "";
            while (true)
            {
                if (testflag == 1)
                {
                    a = "su"; break;
                }
                System.Threading.Thread.Sleep(1000);
            }
            return Json(a);
        }

        
    }
}
