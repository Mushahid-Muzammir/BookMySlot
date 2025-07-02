using BookMySlot.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

namespace BookMySlot.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { } 
    // Imagine AppDbContext is database assistant.Before it can work must give it a set of instructions like the database name, credentials, and other setup info.
    // These instructions come in through DbContextOptions<AppDbContext> options.
    // Then, you pass them up to the "master assistant" (DbContext) using : base(options) — so everything works properly.

        public DbSet<User> Users { get; set; }

        public DbSet<Sport> Sports { get; set; }

        public DbSet<Court> Courts { get; set; }

        public DbSet<CourtSport> CourtSports { get; set; }

        public DbSet<CourtImage> CourtImages { get; set; }

        public DbSet<Booking> Bookings { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // The composite key means both CourtId and SportId together are the unique key
            modelBuilder.Entity<CourtSport>()
                .HasKey(cs => new { cs.CourtId, cs.SportId });

            modelBuilder.Entity<CourtSport>() // Starts configuring the CourtSport entity.
                .HasOne(cs => cs.Court) // Each CourtSport record is associated with one Court
                .WithMany(c => c.CourtSports) // Each Court can be associated with many CourtSports
                .HasForeignKey(cs => cs.CourtId);

            modelBuilder.Entity<CourtSport>()
                .HasOne(cs => cs.Sport)
                .WithMany(s => s.CourtSports)
                .HasForeignKey(cs => cs.SportId);

            modelBuilder.Entity<CourtImage>()
                .HasOne(ci => ci.Court)
                .WithMany() // Specify the relationship as one-to-many
                .HasForeignKey(ci => ci.CourtId); // Correctly define the foreign key

        }

    }
}
