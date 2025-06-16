namespace BookMySlot.Models
{
    public class CourtSport
    {
        required public int CourtId { get; set; }

        required public Court Court { get; set; }

        public int SportId { get; set; }

        required public Sport Sport { get; set; }

        required public decimal Price { get; set; }
    }
}
