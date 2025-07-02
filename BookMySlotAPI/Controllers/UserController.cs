using Microsoft.AspNetCore.Mvc;
using BookMySlot.Models;
using BookMySlot.Repositories.UserContext;

namespace BookMySlot.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly IUserRepository _repo;

        public UsersController(IUserRepository repo)
        {
            _repo = repo;
        }

        // GET: api/users
        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetUsers()
        {
            return Ok(await _repo.GetAllUsersAsync());

        }
        // GET: api/users/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetUser(int id)
        {
            var user = await _repo.GetUserByIdAsync(id);
            return user is null ? NotFound() : Ok(user);
        }

        // POST: api/users
        [HttpPost]
        public async Task<ActionResult<User>> AddUser([FromBody] User user)
        {
            var createdUser = await _repo.AddUserAsync(user);
            //return Ok(createdUser);
            return CreatedAtAction(nameof(GetUser), new { id = createdUser.UserId }, createdUser);

        }
        //CreatedAtAction(...) is a helper method that returns a 201 Created status.
        //nameof(GetUser) means it will point to your GetUser() method(probably GetUser(int id)).
        //new { id = created.Id
        //is a route parameter — it’s how the client will call GET /users/created.Id.
        //created is the user data returned in the response body.


        // PUT: api/users/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateUser(int id, [FromBody] User updatedUser)
        {
            if( id != updatedUser.UserId )
            {
                return BadRequest("User ID mismatch."); 
            }
            await _repo.UpdateAsync(updatedUser);
            return NoContent();
        }

        // DELETE: api/users/{id}
        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteUser(int id)
        {
            await _repo.DeleteAsync(id);
            return NoContent();         
        }

         //IActionResult = For general controller responses, especially if you're using custom result types
        // ActionResult =  For typical controller methods that return status codes only
       //  ActionResult<T> =  For returning both data and HTTP status (e.g., a User object)
    }
}

