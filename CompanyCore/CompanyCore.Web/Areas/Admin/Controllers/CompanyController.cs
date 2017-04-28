using Company.Bll;
using Company.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;


namespace CompanyWeb.Areas.Admin.Controllers
{
    [Area("Admin")]
    public class CompanyController : Controller
    {
        // GET: Admin/Company
        public ActionResult Index()
        {
            var bll = new DictInfoBll();
            var dictlist = bll.GetDictionaryModel();
           
            return View(dictlist);
        }

        public ActionResult Add()
        {
            return View();
        }
        public ActionResult Save(DictionaryModel model)
        {
            var result = new ResponseModel<DictionaryModel>()
            {
                StatusCode = "004",

            };

            try
            {
                
                string companyfile = SaveImg(Request.Form.Files["CompanyImg"]);
                string logo = SaveImg(Request.Form.Files["CompanyLogo"]);
                string BannerUrl1 = SaveImg(Request.Form.Files["BannerUrl1"]);
                string BannerUrl2 = SaveImg(Request.Form.Files["BannerUrl2"]);
                string BannerUrl3 = SaveImg(Request.Form.Files["BannerUrl3"]);

                model.CompanyImg = companyfile;
                model.CompanyLogo = logo;
                model.BannerUrl = BannerUrl1 + "," + BannerUrl2 + "," + BannerUrl3;
                var bll = new DictInfoBll();
                var rows = bll.AddDictionaryModel(model);
                result.StatusCode = "001";
                result.Result = rows;
            }
            catch (Exception ex)
            {
                result.Msg = ex.Message;
            }
            if (result.Result > 0)
            {
                return Redirect("/Admin/Company/Index");
          
            }
            else
            {
                return Redirect("/Admin/Company/Add");
            }
            //return Json(result);



        }
        //string SaveImg(HttpPostedFileBase file)
        //{
        //    if (file.ContentLength == 0)
        //    {
        //        return string.Empty;
        //    }

        //    var ext = file.FileName.Substring(file.FileName.LastIndexOf('.'), 4);
        //    var companyImg = "UploadImg/" + System.DateTime.Now.ToFileTime() + new Random(1).Next(1000) + ext;
        //    if (!System.IO.Directory.Exists(Server.MapPath("UploadImg")))
        //    {
        //        System.IO.Directory.CreateDirectory(Server.MapPath("UploadImg"));
        //    }
        //    file.SaveAs(Server.MapPath(companyImg));
        //    return companyImg;
        //}

        string SaveImg(IFormFile file)
        {
            //TODO 保存文件
            return string.Empty;
            if (file.Length == 0)
            {
                return string.Empty;
            }

            //var ext = file.FileName.Substring(file.FileName.LastIndexOf('.'), 4);
            //var companyImg = "UploadImg/" + System.DateTime.Now.ToFileTime() + new Random(1).Next(1000) + ext;
            //if (!System.IO.Directory.Exists(Server.MapPath("UploadImg")))
            //{
            //    System.IO.Directory.CreateDirectory(Server.MapPath("UploadImg"));
            //}
            //using (var stream = file.OpenReadStream())
            //{
            //    CompanyWebCore.Startup
            //   System.IO.File.Create()
            //    stream.Write()
            //}
            //    file.SaveAs(Server.MapPath(companyImg));
            //return companyImg;
        }
    }
}