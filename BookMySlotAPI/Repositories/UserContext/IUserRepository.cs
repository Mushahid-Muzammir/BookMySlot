using BookMySlot.Models;

namespace BookMySlot.Repositories.UserContext
{
    public interface IUserRepository
    {
        Task<IEnumerable<User>> GetAllUsersAsync();// Asynchronous(Task) method returns read-only(IEnumerable) collection of User objects.
        Task<User?> GetUserByIdAsync(int id);
        Task<User> AddUserAsync(User user);
        Task<User> UpdateAsync(User user);
        Task DeleteAsync(int id);
    }
}
