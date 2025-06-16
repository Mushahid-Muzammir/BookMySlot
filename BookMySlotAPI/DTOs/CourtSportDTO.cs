namespace BookMySlot.DTOs
{
    public class CourtSportDTO
    {
        public int CourtId { get; set; }

        required public string Name { get; set; }

        public string Description { get; set; }

        required public string ImageUrl { get; set; }

        required public string Location { get; set; }

        required public decimal Price { get; set; }
    }
}
