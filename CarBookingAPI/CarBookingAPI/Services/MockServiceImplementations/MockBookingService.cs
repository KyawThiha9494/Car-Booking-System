using CarBookingAPI.Data;
using CarBookingAPI.Models;
using CarBookingAPI.Services.IServices;

namespace CarBookingAPI.Services.MockServiceImplementations
{
    public class MockBookingService : IBookingService
    {
        public List<Booking> GetAllBookings()
        {
            return MockData.Bookings;
        }

        public Booking MakeBooking(Booking booking)
        {
            booking.Id = MockData.Bookings.Max(b => b.Id) + 1;
            booking.BookingNo = Guid.NewGuid().ToString();
            //booking.Car = MockData.Cars.FirstOrDefault(c => c.Id == booking.CarId);
            MockData.Bookings.Add(booking);

            return booking;
        }
    }
}
