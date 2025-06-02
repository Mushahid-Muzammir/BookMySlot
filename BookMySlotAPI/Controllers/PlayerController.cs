using Microsoft.AspNetCore.Mvc;

namespace BookMySlot.Controllers
{
    public class PlayersController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
