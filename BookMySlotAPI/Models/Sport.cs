namespace BookMySlot.Models
{
    public class Sport
    {
        required public int SportId { get; set; }

        required public string Name { get; set; }

        public string? ImageUrl { get; set; }

        required public ICollection<CourtSport> CourtSports { get; set; }

        public ICollection<Booking> Bookings { get; set; }

    }
}
