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

        public async Task<int> ReturnCourtByUserId(int userId)
        {
            var courtAdmin = await _context.CourtAdmins
                .Where(ca => ca.UserId == userId)
                .Select(ca => new { ca.CourtId })
                .FirstOrDefaultAsync();

            if (courtAdmin == null)
            {
                throw new Exception("Court not found");
            }
            return courtAdmin.CourtId;

        }

        public async Task<decimal> ReturnPriceByCourtId(int courtId)
        {
            var courtPrice = await _context.CourtSports
                .Where(cp => cp.CourtId == courtId)
                .Select(cp => new { cp.Price })
                .FirstOrDefaultAsync();

            if (courtPrice == null)
            {
                throw new Exception("Court price not found");
            }
            return courtPrice.Price;

        }

        public async Task<List<BookingsDTO>> GetTodayBookings(int userId)
        {
            int courtId = await ReturnCourtByUserId(userId);

            var courtPrice = await _context.CourtSports
                .Where(cp => cp.CourtId == courtId)
                .Select(cp => new { cp.Price })
                .FirstOrDefaultAsync();

            if (courtPrice == null)
            {
                throw new Exception("Court price not found");
            }
            decimal price = courtPrice.Price;

            DateOnly currentdate = DateOnly.FromDateTime(DateTime.Now);
            return await _context.Bookings
                .Where(b => b.Date == currentdate)
                .Where(b => b.CourtId == courtId) 
                .Select(b => new BookingsDTO
                {
                    BookingId = b.BookingId,
                    Name = b.User.Name,
                    StartTime = b.StartTime,
                    EndTime = b.EndTime,
                    Date = b.Date,
                    SportName = b.Sport.Name,
                    Contact = b.User.Email,
                    Price = price,
                }).ToListAsync();
        }

        public async Task<List<BookingCountByDateDTO>> GetBookingCountByDate(int userId)
        {
            int courtId = await ReturnCourtByUserId(userId); 

            var bookingsWithDate = await _context.Bookings
                .Where(b => b.CourtId == courtId)
                .GroupBy(b => b.Date)
                .Select(b => new BookingCountByDateDTO
                {
                    BookingCount = b.Count(),
                    Date = b.Key
                })
                .OrderBy(b => b.Date)
                .ToListAsync();
            return bookingsWithDate;
        }

        public async Task<List<BookingsDTO>> GetBookingsByCourt(int userId)
        {
            int courtId = await ReturnCourtByUserId(userId);
            decimal price = await ReturnPriceByCourtId(courtId);
            var bookingsByCourt = await _context.Bookings
                .Where(b => b.CourtId == courtId)
                .Select(b => new BookingsDTO
                {
                    BookingId = b.BookingId,
                    Name = b.User.Name,
                    StartTime = b.StartTime,
                    EndTime = b.EndTime,
                    Date = b.Date,
                    SportName = b.Sport.Name,
                    Contact = b.User.Email,
                    Price = price,
                })
                .OrderByDescending(b => b.Date)
                .ToListAsync();

            return bookingsByCourt;
        }       
    }
}
