using CarBookingAPI.Database;
using CarBookingAPI.Models;
using CarBookingAPI.Services.IServices;

namespace CarBookingAPI.Services.ServiceImplementations
{
    public class BookingService : IBookingService
    {
        private readonly ApplicationDbContext _context;

        public BookingService(ApplicationDbContext context)
        {
            _context = context;
        }
        public List<Booking> GetAllBookings()
        {
            throw new NotImplementedException();
        }

        public Booking MakeBooking(Booking booking)
        {
            booking.Car = null;

            _context.Bookings.Add(booking);

            _context.SaveChanges();

            _context.Entry(booking).Reference(b => b.Car).Load();

            return booking;
        }
    }
}
