using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Titan.WebCore.Models
{
    public class TenantUser
    {
        public string TenatInfo { get; set; }
        public Tenant Tenant { get; set; }
    }
    public class AppSettings
    {
        public string ApiUrl { get; set; }
    }
}
