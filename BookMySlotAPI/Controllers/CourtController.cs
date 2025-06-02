using BookMySlot.Models;
using BookMySlot.Repositories.CourtContext;
using Microsoft.AspNetCore.Mvc;

namespace BookMySlot.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CourtsController : ControllerBase
    {
        private readonly ICourtRepository _repo;

        public CourtsController(ICourtRepository repo)
        {
            _repo = repo;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Court>>> GetCourts()
        {
            return Ok(await _repo.GetAllCourtsAsync());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Court>> GetCourtById(int id)
        {
            var court = await _repo.GetCourtByIdAsync(id);
            return court is null ? NotFound() : Ok(court);
        }

        [HttpPost]
        public async Task<ActionResult<Court>> AddCourt(Court court)
        {
            var createdCourt = await _repo.AddCourtAsync(court);
            //return Ok(createdCourt);
            return CreatedAtAction( nameof(GetCourtById), new { id = createdCourt.CourtId }, createdCourt);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Court>> UpdateCourt(int id, [FromBody] Court updatedCourt)
        {
            if(id != updatedCourt.CourtId)
            {
                return BadRequest("Id Mismatch");
            }
            await _repo.UpdateCourtAsync(updatedCourt);
            return Ok(updatedCourt);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteCourt(int id)
        {
            await _repo.DeleteCourtAsync(id);
            return NoContent();
        }
    }
}
