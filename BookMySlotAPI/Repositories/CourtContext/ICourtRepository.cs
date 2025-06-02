using BookMySlot.Models;

namespace BookMySlot.Repositories.CourtContext
{
    public interface ICourtRepository
    {
        Task<IEnumerable<Court>> GetAllCourtsAsync();

        Task<Court?> GetCourtByIdAsync(int id);

        Task<Court> AddCourtAsync(Court court);

        Task<Court> UpdateCourtAsync(Court court);

        Task DeleteCourtAsync(int id);

    }
}
