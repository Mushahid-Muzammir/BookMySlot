namespace BookMySlot.Models
{
    public class Court
    {
        required public int CourtId { get; set; }

        required public string Name { get; set; }

        required public string Description { get; set; }

        required public string ImageUrl { get; set; }

        required public string Location { get; set; }

        required public string ContactNumber { get; set; }

        public TimeSpan OpenTime { get; set; }

        public TimeSpan CloseTime { get; set; }

        public ICollection<CourtSport> CourtSports { get; set; }

    }
}
