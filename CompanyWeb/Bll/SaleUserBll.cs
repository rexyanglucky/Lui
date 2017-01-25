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
    public class SaleUserBll
    {

        public SaleUserModel GetSaleUserModel(int id)
        {

            SaleUserModel model = new SaleUserModel();
            using (var ctx = new CompanyWebContext())
            {
                model = ctx.SaleUsers.FirstOrDefault(a => a.SaleUserId == id);
            }
            return model;

        }
        public List<SaleUserModel> GetSaleUserModelList()
        {

            List<SaleUserModel> model = new List<SaleUserModel>();
            using (var ctx = new CompanyWebContext())
            {
                model = ctx.SaleUsers.Where(a => 1 == 1).ToList();
            }
            return model;

        }
        public List<SaleUserModel> UpdateSaleUserModel(int id, SaleUserModel updateModel)
        {

            List<SaleUserModel> model = new List<SaleUserModel>();
            using (var ctx = new CompanyWebContext())
            {
                var d = ctx.Dicts.FirstOrDefault(m => m.CompanyId == id);
                updateModel.SaleUserId = id;
                var info = typeof(SaleUserModel);
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

        public int AddSaleUserModel(SaleUserModel updateModel)
        {
            int rows = 0;
            List<SaleUserModel> model = new List<SaleUserModel>();
            using (var ctx = new CompanyWebContext())
            {
                var d = ctx.SaleUsers.Add(updateModel);
                rows = ctx.SaveChanges();
            }
            return rows;

        }
        public int DeleteSaleUser(int id)
        {
            int rows = 0;
            List<SaleUserModel> model = new List<SaleUserModel>();
            using (var ctx = new CompanyWebContext())
            {
                var delmodel = new SaleUserModel() { SaleUserId = id };
                ctx.SaleUsers.Attach(delmodel);
                ctx.SaleUsers.Remove(delmodel);
                rows = ctx.SaveChanges();
            }
            return rows;

        }
    }
}
