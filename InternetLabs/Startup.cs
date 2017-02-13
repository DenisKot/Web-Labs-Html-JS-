using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(InternetLabs.Startup))]
namespace InternetLabs
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
