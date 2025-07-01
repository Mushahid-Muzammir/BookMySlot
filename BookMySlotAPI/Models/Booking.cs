namespace BookMySlot.Models
{
    public class Booking
    {
        required public int BookingId { get; set; }

        required public int CourtId { get; set; }

        public ICollection<Court> Court { get; set; }

        required public int SportId { get; set; }

        public ICollection<Sport> Sports { get; set; }

        required public int PlayerId {  get; set; }

        public ICollection<Player> Player { get; set; }

        required public DateTime Date {  get; set; }

        public TimeSpan StartTime { get; set; }

        public TimeSpan EndTime { get; set; }
    }
}
