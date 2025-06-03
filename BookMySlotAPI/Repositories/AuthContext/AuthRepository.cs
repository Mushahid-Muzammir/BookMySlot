using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using BookMySlot.Data;
using BookMySlot.DTOs;
using BookMySlot.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;

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

            CreatePasswordHash(requestBody.Password, out byte[] hash, out byte[] salt);

            var user = new User
            {
                Name = requestBody.Name,
                Email = requestBody.Email,
                PasswordHash = hash,
                PasswordSalt = salt
            };

            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return GenerateToken(user);

        }

        public async Task<String> LoginAsync(LoginDTO requestBody)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == requestBody.Email);
            if (user == null || !VerifyPassword(requestBody.Password, user.PasswordHash, user.PasswordSalt))
            {
                throw new Exception("Invalid Credentials");
            }
            return GenerateToken(user);
        }

        private void CreatePasswordHash(string password, out byte[] hash, out byte[] salt)
        {
            using var hmac = new HMACSHA512();
            salt = hmac.Key;
            hash = hmac.ComputeHash(Encoding.UTF8.GetBytes(password));
        }

        private bool VerifyPassword(string password, byte[] hash, byte[] salt)
        {
            using var hmac = new HMACSHA512(salt);
            var computedHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(password));
            return computedHash.SequenceEqual(hash);
        }

        private string GenerateToken(User user) 
        {
            var claims = new[]
            {
                new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
                new Claim(ClaimTypes.Email, user.Email),
                new Claim(ClaimTypes.Name, user.Name)
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_conf["Jwt:Key"]));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                issuer: _conf["Jwt:Issuer"],
                audience: _conf["Jwt:Audience"],
                claims: claims,
                expires: DateTime.Now.AddHours(2),
                signingCredentials: creds
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

    }
}
