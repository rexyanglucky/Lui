using Microsoft.Extensions.Options;
namespace CompanyWebCore
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