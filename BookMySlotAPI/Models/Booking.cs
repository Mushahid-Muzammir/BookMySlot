using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BookMySlot.Models
{
    public class Booking
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int BookingId { get; set; }

        [Required]
        public int CourtId { get; set; }

        [ForeignKey("CourtId")]
        public Court Court { get; set; }  

        [Required]
        public int SportId { get; set; }

        [ForeignKey("SportId")]
        public Sport Sport { get; set; }  

        [Required]
        public int UserId { get; set; }

        [ForeignKey("UserId")]
        public User User { get; set; } 

        [Required]
        public DateOnly Date { get; set; }

        [Required]
        public TimeSpan StartTime { get; set; }

        [Required]
        public TimeSpan EndTime { get; set; }
    }
}
