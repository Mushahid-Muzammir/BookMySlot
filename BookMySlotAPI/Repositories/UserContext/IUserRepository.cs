using BookMySlot.Models;

namespace BookMySlot.Repositories.UserContext
{
    public interface IUserRepository
    {
        Task<IEnumerable<User>> GetAllAsync();// Asynchronous(Task) method returns read-only(IEnumerable) collection of User objects.
        Task<User> GetByIdAsync(int id);
        Task<User> AddAsync(User user);
        Task<User> UpdateAsync(User user);
        Task DeleteAsync(int id);

    }
}
