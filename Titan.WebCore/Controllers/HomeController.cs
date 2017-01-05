using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;
using System.Net.Http;
using System.Threading.Tasks;
using Titan.WebCore.Models;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Titan.WebCore.Controllers
{
    public class HomeController : Controller
    {
        private readonly TenantUser _options;
        private readonly AppSettings _appSettings;
        private TenantUser TenantUser { get; set; }

        public HomeController(IOptions<TenantUser> opSettings, IOptions<AppSettings> appSettings)
        {
            _options = opSettings.Value;
            _appSettings = appSettings.Value;

        }
        // GET: /<controller>/
        public IActionResult Index()
        {
            var t = _options.Tenant;
            return View();
        }

        public async Task<string> GetCurrentUserProfile()
        {
            using (var client = new HttpClient())
            {
                var response = await client.GetStringAsync(_appSettings.ApiUrl + "/3BDC1617-D620-65D0-26EF-000E1090A386");
                return response;
                // The response object is a string that looks like this:
                // "{ message: 'Hello world!' }"
            }
        }
    }
}
