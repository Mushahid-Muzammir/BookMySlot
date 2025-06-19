using BookMySlot.DTOs;
using BookMySlot.Models;

namespace BookMySlot.Repositories.CourtContext
{
    public interface ICourtRepository
    {
        Task<IEnumerable<Court>> GetAllCourtsAsync();

        Task<Court> AddCourtAsync(Court court);

        Task<Court> UpdateCourtAsync(Court court);

        Task DeleteCourtAsync(int id);

        Task<List<CourtSportDTO>> GetCourtsBySportIdAsync(int sportId);

        Task<CourtDTO> GetCourtByIdAsync(int courtId);

        Task<SportDTO> GetSportByIdAsync(int sportId);

        Task<List<CourtImageDTO>> GetCourtImageByCourtIdAsync(int courtId);

        Task <List<TimeSlotDTO>> GetAvailableSlotsByCourtId(int courtId, DateTime date, int duration);

    }
}
