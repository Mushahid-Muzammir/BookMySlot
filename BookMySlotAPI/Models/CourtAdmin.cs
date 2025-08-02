using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BookMySlot.Models
{
    public class CourtAdmin
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public int UserId { get; set; }

        public User User { get; set; }

        public int CourtId { get; set; }

        public Court Court { get; set; }
    }
}
