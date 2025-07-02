using BookMySlot.Data;
using BookMySlot.DTOs;
using BookMySlot.Models;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

namespace BookMySlot.Repositories.BookingContext
{
    public class BookingRepository : IBookingRepository
    {
        private readonly AppDbContext _context;

        public BookingRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task<string> CreateBookingAsync( [FromBody] BookingDTO booking)
        {
            var bookingData = new Booking
            {
                CourtId = booking.CourtId,
                SportId = booking.SportId,
                UserId = booking.UserId,
                Date = booking.Date,
                StartTime = booking.StartTime,
                EndTime = booking.EndTime,

            };
            _context.Bookings.Add(bookingData);
            await _context.SaveChangesAsync();
            return "All Okay";
        }

    }
}
