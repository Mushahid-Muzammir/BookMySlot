namespace BookMySlot.DTOs
{
    public class BookingDTO
    {
        public int CourtId { get; set; }

        public int UserId { get; set; }

        public int SportId { get; set; }

        public DateOnly Date { get; set; }

        public TimeSpan StartTime { get; set; }

        public TimeSpan EndTime { get; set; }
    }
}
