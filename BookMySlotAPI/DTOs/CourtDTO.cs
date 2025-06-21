namespace BookMySlot.DTOs
{
    public class CourtDTO
    {
        public int CourtId { get; set; }

        required public string Name { get; set; }

        public string Description { get; set; }

        required public string ContactNumber { get; set; }

        required public string ImageUrl { get; set; }

        required public string Location { get; set; }

    }
}
 