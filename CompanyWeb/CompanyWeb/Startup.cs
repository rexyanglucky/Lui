using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(CompanyWeb.Startup))]
namespace CompanyWeb
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
