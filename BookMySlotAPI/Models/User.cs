using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BookMySlot.Models
{
    public class User
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int UserId { get; set; }

        [Required] 
        required public string Name { get; set; }

        [EmailAddress, Required]
        required public string Email { get; set; }

        [Required]
        public string Role { get; set; }

        [Required]
        required public byte[] PasswordHash { get; set; }

        [Required]
        required public byte[] PasswordSalt { get; set; }


    }
}
