namespace BookMySlot.DTOs
{
    public class UserDTO
    {
       required public string Token {  get; set; }
        required public int UserId { get; set; }
        required public string Name { get; set; }
    }
}
