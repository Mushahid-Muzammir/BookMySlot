using BookMySlot.Data;
using BookMySlot.DTOs;
using BookMySlot.Models;
using BookMySlot.Repositories.CourtContext;
using Microsoft.EntityFrameworkCore;

namespace BookMySlot.Repositories.CourtContext
{
    public class CourtRepository : ICourtRepository
    {
        private readonly AppDbContext _context;

        public CourtRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Court>> GetAllCourtsAsync()
        {
            return await _context.Courts.ToListAsync();
        }

        public async Task<Court?> GetCourtByIdAsync(int id)
        {
            return await _context.Courts.FindAsync(id);
        }

        public async Task<Court> AddCourtAsync(Court court)
        {
            _context.Courts.Add(court);
            await _context.SaveChangesAsync();
            return court;
        }

        public async Task<Court> UpdateCourtAsync(Court court)
        {
            _context.Courts.Update(court);
            await _context.SaveChangesAsync();
            return court;
        }

        public async Task DeleteCourtAsync(int id)
        {
            var court = await _context.Courts.FindAsync(id);
            if (court is not null)
            {
                _context.Courts.Remove(court);
                _context.SaveChanges();
            }
        }

        public async Task<List<CourtDTO>> GetCourtsBySportIdAsync(int sportId)
        {
            return await _context.CourtSports
                .Where(cs => cs.SportId == sportId)
                .Select(cs => cs.Court)
                .Select(c => new CourtDTO
                {
                    CourtId = c.CourtId,
                    Name = c.Name,
                    ImageUrl = c.ImageUrl,

                }).ToListAsync();
        } 

        public async Task<SportDTO> GetSportByIdAsync(int sportId)
        {
            return await _context.Sports
                .Where(s => s.SportId == sportId)
                .Select(s => new SportDTO
                {
                    SportId = s.SportId,
                    Name = s.Name,
                    ImageUrl = s.ImageUrl

                }).FirstOrDefaultAsync();
        }
    }
}
