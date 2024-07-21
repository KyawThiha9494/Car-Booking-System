using CarBookingAPI.Models;

namespace CarBookingAPI.Services.IServices
{
    public interface IBookingService
    {
        List<Booking> GetAllBookings();
        Booking MakeBooking(Booking booking);
    }
}
