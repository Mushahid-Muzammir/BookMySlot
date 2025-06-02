using BookMySlot.Data;
using BookMySlot.DTOs;
using Microsoft.EntityFrameworkCore;

namespace BookMySlot.Repositories.AuthContext
{
    public class AuthRepository : IAuthRepository
    {
        private readonly AppDbContext _context;
        private readonly IConfiguration _conf;

//IConfiguration is a service provided by.NET Core's dependency injection (DI) system that gives you
//access to appsettings.json and environment variables etc


        public AuthRepository(AppDbContext context, IConfiguration conf)
        {
            _context = context;
            _conf = conf;
        
        }

        public async Task<String> RegisterAsync(RegisterDTO requestBody)
        {
            if(await _context.Users.AnyAsync(u => u.Email == requestBody.Email))
            {
                throw new Exception("User Already Exists");
            }


        }

        public async Task<String> LoginAsync(LoginDTO requestBody)
        {

        }

    }
}
