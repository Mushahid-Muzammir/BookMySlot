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
    }
}
