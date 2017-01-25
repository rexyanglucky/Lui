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
    public class DictInfoBll
    {
        public List<DictionaryModel> GetDictionaryModel()
        {

            List<DictionaryModel> model = new List<DictionaryModel>();
            using (var ctx = new CompanyWebContext())
            {
                model= ctx.Dicts.Where(a=>1==1).ToList();
            }
            return model;

        }
        public List<DictionaryModel> UpdateDictionaryModel(int companyid, DictionaryModel updateModel)
        {

            List<DictionaryModel> model = new List<DictionaryModel>();
            using (var ctx = new CompanyWebContext())
            {
                var d = ctx.Dicts.FirstOrDefault(m => m.CompanyId == companyid);
                updateModel.CompanyId = companyid;
                var info = typeof(DictionaryModel);
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

        public int AddDictionaryModel( DictionaryModel updateModel)
        {
            int rows = 0;
            List<DictionaryModel> model = new List<DictionaryModel>();
            using (var ctx = new CompanyWebContext())
            {
                var d = ctx.Dicts.Add(updateModel);
                rows = ctx.SaveChanges();
            }
            return rows;

        }
        public int DeleteDictionary(int companyid)
        {
            int rows = 0;
            List<DictionaryModel> model = new List<DictionaryModel>();
            using (var ctx = new CompanyWebContext())
            {
                var delmodel = new DictionaryModel() { CompanyId = companyid };
                ctx.Dicts.Attach(delmodel);
                ctx.Dicts.Remove(delmodel);
                rows = ctx.SaveChanges();
            }
            return rows;

        }
    }
}
