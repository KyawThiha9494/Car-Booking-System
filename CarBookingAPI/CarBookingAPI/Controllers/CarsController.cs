using CarBookingAPI.Database;
using CarBookingAPI.Models;
using CarBookingAPI.Services.IServices;
using Microsoft.AspNetCore.Mvc;

namespace CarBookingAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CarsController : Controller
    {
        private readonly ICarService _carService;

        public CarsController(ICarService carService)
        {
            _carService = carService;
        }

        [HttpGet]
        public IActionResult GetAllCars()
        {
            var cars = _carService.GetAllCars();
            return Ok(cars);

        }
    }
}
