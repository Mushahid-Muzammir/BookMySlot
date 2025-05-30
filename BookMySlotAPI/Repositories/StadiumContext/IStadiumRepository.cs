using BookMySlot.Models;

namespace BookMySlot.Repositories.StadiumContext
{
    public interface IStadiumRepository
    {
        Task<IEnumerable<Stadium>> GetAllStadiumsAsync();

        Task<Stadium?> GetStadiumByIdAsync(int id);

        Task<Stadium> AddStadiumAsync(Stadium stadium);

        Task<Stadium> UpdateStadiumAsync(Stadium stadium);

        Task DeleteStadiumAsync(int id);

    }
}
