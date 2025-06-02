using BookMySlot.Models;

namespace BookMySlot.Repositories.SportContext
{
    public interface ISportRepository
    {
        Task<IEnumerable<Sport>> GetAllSportsAsync();

        Task<Sport?> GetSportByIdAsync(int id);

        Task<Sport> AddSportAsync(Sport sport);

        Task<Sport> UpdateSportAsync(Sport sport);

        Task DeleteSportByIdAsync(int id);

    }
}
