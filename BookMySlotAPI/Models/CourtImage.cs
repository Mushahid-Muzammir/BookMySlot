namespace BookMySlot.Models
{
    public class CourtImage
    {
        public int Id { get; set; }

        public int CourtId { get; set; }

        public Court Court { get; set; }

        public string ImageUrl { get; set; }
    }
}
