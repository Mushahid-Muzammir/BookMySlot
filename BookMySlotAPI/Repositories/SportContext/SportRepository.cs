using BookMySlot.Data;
using BookMySlot.Models;
using Microsoft.EntityFrameworkCore;

namespace BookMySlot.Repositories.SportContext
{
    public class SportRepository : ISportRepository
    {
        private readonly AppDbContext _context;
        public SportRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Sport>> GetAllSportsAsync()
        {
            return await _context.Sports.ToListAsync();
        }

        public async Task<Sport?> GetSportByIdAsync(int id)
        {
            return await _context.Sports.FindAsync(id);
        }

        public async Task<Sport> AddSportAsync(Sport sport)
        {
            _context.Sports.Add(sport);
            await _context.SaveChangesAsync();
            return sport;
        }

        public async Task<Sport> UpdateSportAsync(Sport sport)
        {
            _context.Sports.Update(sport);
            await _context.SaveChangesAsync();
            return sport;
        }

        public async Task DeleteSportByIdAsync(int id)
        {
            var sport = await _context.Sports.FindAsync(id);
            if (sport is not null)
            {
                _context.Sports.Remove(sport);
                await _context.SaveChangesAsync();
            }
        }
    }
}
