using BookMySlot.DTOs;

namespace BookMySlot.Repositories.AuthContext
{
    public interface IAuthRepository
    {
        Task<String> RegisterAsync(RegisterDTO requestObj);

        Task<String> LoginAsync(LoginDTO requestObj);
    }
}
