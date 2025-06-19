namespace BookMySlot.DTOs
{
    public class TimeSlotDTO
    {
        required public string StartTime { get; set; }

        required public string EndTime { get; set; }

        public string Status {  get; set; }
    }
}
