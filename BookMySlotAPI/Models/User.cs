namespace BookMySlot.Models
{
    public class User
    {
        public int Id { get; set; }
        required public string Name { get; set; }
        required public string Email { get; set; }
        required public string Password { get; set; }

    }
}
