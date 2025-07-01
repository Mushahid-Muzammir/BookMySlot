using BookMySlot.Models;
using BookMySlot.Repositories.SportContext;
using Microsoft.AspNetCore.Mvc;

namespace BookMySlot.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SportsController : ControllerBase
    {
        private readonly ISportRepository _repo;

        public SportsController(ISportRepository repo)
        {
            _repo = repo;
        }

        // GET: api/sports
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Sport>>> GetSports()
        {
            return Ok(await _repo.GetAllSportsAsync());

        }
        // GET: api/sports/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<Sport>> GetSport(int id)
        {
            var sport = await _repo.GetSportByIdAsync(id);
            return sport is null ? NotFound() : Ok(sport);
        }

        // POST: api/sports
        [HttpPost]
        public async Task<ActionResult<User>> AddUser([FromBody] Sport sport)
        {
            var createdSport = await _repo.AddSportAsync(sport);
            //return Ok(createdUser);
            return CreatedAtAction(nameof(GetSport), new { id = createdSport.SportId }, createdSport);

        }

        // PUT: api/sports/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateSport(int id, [FromBody] Sport updatedSport)
        {
            if (id != updatedSport.SportId)
            {
                return BadRequest("Sport ID mismatch.");
            }
            await _repo.UpdateSportAsync(updatedSport);
            return NoContent();
        }

        // DELETE: api/users/{id}
        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteSport(int id)
        {
            await _repo.DeleteSportByIdAsync(id);
            return NoContent();
        }

    }
}
