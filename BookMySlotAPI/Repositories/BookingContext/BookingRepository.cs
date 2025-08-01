using BookMySlot.Data;
using BookMySlot.DTOs;
using BookMySlot.Models;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BookMySlot.Repositories.BookingContext
{
    public class BookingRepository : IBookingRepository
    {
        private readonly AppDbContext _context;

        public BookingRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task<string> CreateBookingAsync( [FromBody] CreateBookingDTO booking)
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

        public async Task<List<BookingsDTO>> GetTodayBookings()
        {
            DateOnly currentdate = DateOnly.FromDateTime(DateTime.Now);
            return await _context.Bookings
                .Where(b => b.Date == currentdate)
                .Select(b => new BookingsDTO
                {
                    BookingId = b.BookingId,
                    Name = b.User.Name,
                    StartTime = b.StartTime,
                    EndTime = b.EndTime,
                    Date = b.Date,
                    SportName = b.Sport.Name,
                    Contact = b.User.Email

                }).ToListAsync();

        }

    }
}
