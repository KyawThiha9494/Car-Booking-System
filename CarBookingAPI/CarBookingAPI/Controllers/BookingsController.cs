using CarBookingAPI.Models;
using CarBookingAPI.Services.IServices;
using Microsoft.AspNetCore.Mvc;

namespace CarBookingAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookingsController : Controller
    {
        private readonly IBookingService _bookingService;

        public BookingsController(IBookingService bookingService)
        {
            _bookingService = bookingService;
        }

        [HttpGet]
        public IActionResult GetAllBookings()
        {
            var bookings = _bookingService.GetAllBookings();
            return Ok(bookings);
        }

        [HttpPost]
        public IActionResult MakeBooking(Booking booking)
        {
            if (booking == null)
            {
                return BadRequest("Booking data is required.");
            }
            var createdBooking = _bookingService.MakeBooking(booking);
            return Ok(createdBooking);
        }
    }
}
