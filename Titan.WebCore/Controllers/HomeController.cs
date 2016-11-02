using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;
using Titan.WebCore.Models;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Titan.WebCore.Controllers
{
    public class HomeController : Controller
    {
        private readonly TenantUser options;
        private TenantUser TenantUser { get; set; }

        public HomeController(IOptions<TenantUser>opSettings)
        {
            options = opSettings.Value;
        }
        // GET: /<controller>/
        public IActionResult Index()
        {
            var t = options.Tenant;
            return View();
        }
    }
}
