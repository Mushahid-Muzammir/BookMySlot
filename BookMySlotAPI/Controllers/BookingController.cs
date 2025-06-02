using Microsoft.AspNetCore.Mvc;

namespace BookMySlot.Controllers
{
    public class BookingsController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
