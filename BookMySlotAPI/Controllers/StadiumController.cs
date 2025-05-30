using Microsoft.AspNetCore.Mvc;

namespace BookMySlot.Controllers
{
    public class StadiumController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
