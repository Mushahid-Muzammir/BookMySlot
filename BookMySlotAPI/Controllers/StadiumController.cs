using BookMySlot.Models;
using BookMySlot.Repositories.StadiumContext;
using Microsoft.AspNetCore.Mvc;

namespace BookMySlot.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StadiumController : ControllerBase
    {
        private readonly IStadiumRepository _repo;

        public StadiumController(IStadiumRepository repo)
        {
            _repo = repo;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Stadium>>> GetStadiums()
        {
            return Ok(await _repo.GetAllStadiumsAsync());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Stadium>> GetStadiumById(int id)
        {
            var stadium = await _repo.GetStadiumByIdAsync(id);
            return stadium is null ? NotFound() : Ok(stadium);
        }

        [HttpPost]
        public async Task<ActionResult<Stadium>> AddStadium(Stadium stadium)
        {
            var createdStadium = await _repo.AddStadiumAsync(stadium);
            //return Ok(createdStadium);
            return CreatedAtAction( nameof(GetStadiumById), new { id = createdStadium.StadiumId }, createdStadium );
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Stadium>> UpdateStadium(int id, [FromBody] Stadium updatedStadium)
        {
            if(id != updatedStadium.StadiumId)
            {
                return BadRequest("Id Mismatch");
            }
            await _repo.UpdateStadiumAsync(updatedStadium);
            return Ok(updatedStadium);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteStadium (int id)
        {
            await _repo.DeleteStadiumAsync(id);
            return NoContent();
        }
    }
}
