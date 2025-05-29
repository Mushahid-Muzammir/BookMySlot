using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BookMySlot.Models
{
    public class User
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Required]
        required public string Name { get; set; }

        [EmailAddress, Required]
        required public string Email { get; set; }

        [Required]
        required public string Password { get; set; }

    }
}
