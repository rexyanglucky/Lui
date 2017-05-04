using Company.Models;
using Microsoft.Extensions.Options;
namespace Company.Models
{
    public class AppSettingsServices
    {
        public static  AppSettings AppSettings;
        public static void SetAppSettings(IOptions<AppSettings>  v)
        {
          AppSettings= v.Value;
        }

    }

}