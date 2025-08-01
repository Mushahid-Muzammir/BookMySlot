namespace BookMySlot.DTOs
{
    public class CreateBookingDTO
    {

        public int CourtId { get; set; }

        public int UserId { get; set; }

        public int SportId { get; set; }

        public DateOnly Date { get; set; }

        public TimeSpan StartTime { get; set; }

        public TimeSpan EndTime { get; set; }
    }

    public class BookingsDTO
    {
        public int BookingId { get; set; }

        public string Name { get; set; }

        public string Contact { get; set; }

        public string SportName { get; set; }

        public DateOnly Date { get; set; }

        public TimeSpan StartTime { get; set; }

        public TimeSpan EndTime { get; set; }

    }
}
