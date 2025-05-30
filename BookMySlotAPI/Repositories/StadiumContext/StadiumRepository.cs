using BookMySlot.Data;
using BookMySlot.Models;
using Microsoft.EntityFrameworkCore;

namespace BookMySlot.Repositories.StadiumContext
{
    public class StadiumRepository : IStadiumRepository
    {
        private readonly AppDbContext _context;

        public StadiumRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Stadium>> GetAllStadiumsAsync()
        {
            return await _context.Stadiums.ToListAsync();
        }

        public async Task<Stadium?> GetStadiumByIdAsync(int id)
        {
            return await _context.Stadiums.FindAsync(id);
        }

        public async Task<Stadium> AddStadiumAsync(Stadium stadium)
        {
            _context.Stadiums.Add(stadium);
            await _context.SaveChangesAsync();
            return stadium;
        }

        public async Task<Stadium> UpdateStadiumAsync(Stadium stadium)
        {
            _context.Stadiums.Update(stadium);
            await _context.SaveChangesAsync();
            return stadium;
        }

        public async Task DeleteStadiumAsync(int id)
        {
            var stadium = await _context.Stadiums.FindAsync(id);
            if (stadium is not null)
            {
                _context.Stadiums.Remove(stadium);
                _context.SaveChanges();
            }
        }
    }
}
