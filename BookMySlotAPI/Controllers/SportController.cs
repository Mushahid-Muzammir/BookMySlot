using Microsoft.AspNetCore.Mvc;

namespace BookMySlot.Controllers
{
    public class SportController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
