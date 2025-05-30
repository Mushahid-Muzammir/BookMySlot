using Microsoft.AspNetCore.Mvc;

namespace BookMySlot.Controllers
{
    public class PlayerController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
