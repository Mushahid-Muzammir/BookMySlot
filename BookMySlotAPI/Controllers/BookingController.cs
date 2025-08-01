using BookMySlot.DTOs;
using BookMySlot.Models;
using BookMySlot.Repositories.BookingContext;
using Microsoft.AspNetCore.Mvc;

namespace BookMySlot.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookingsController : Controller
    {
        private readonly IBookingRepository _repo;
        public BookingsController(IBookingRepository repo)
        {
            _repo = repo;
        }

        [HttpPost]
        public async Task<string> CreateBooking([FromBody] CreateBookingDTO booking)
        {
            var createdBooking = await _repo.CreateBookingAsync(booking);
            return createdBooking;
        }

        [HttpGet]
        public async Task<List<BookingsDTO>> GetTodayBookings()
        {
            var bookings = await _repo.GetTodayBookings();
            return bookings;
        }

    }
}
