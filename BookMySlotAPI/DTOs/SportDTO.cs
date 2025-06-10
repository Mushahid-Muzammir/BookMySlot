namespace BookMySlot.DTOs
{
    public class SportDTO
    {
        public int SportId { get; set; }

        required public string Name { get; set; }

        public string ImageUrl { get; set; }
    }
}
