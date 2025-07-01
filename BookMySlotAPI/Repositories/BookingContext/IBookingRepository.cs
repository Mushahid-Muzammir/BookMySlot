using BookMySlot.Models;

namespace BookMySlot.Repositories.BookingContext
{
    public interface IBookingRepository
    {
        Task<Booking> CreateBookingAsync(Booking booking);
    }
}
