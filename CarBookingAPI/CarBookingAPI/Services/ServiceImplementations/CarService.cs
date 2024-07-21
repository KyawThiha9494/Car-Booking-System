using CarBookingAPI.Database;
using CarBookingAPI.Models;
using CarBookingAPI.Services.IServices;
using Microsoft.EntityFrameworkCore;

namespace CarBookingAPI.Services.ServiceImplementations
{
    public class CarService : ICarService
    {
        private readonly ApplicationDbContext _context;

        public CarService(ApplicationDbContext context)
        {
            _context = context;
        }
        public List<Car> GetAllCars()
        {
            var bookedCarIds = _context.Bookings.Select(b => b.CarId).ToList();
            var cars = _context.Cars
                              .Where(car => !bookedCarIds.Contains(car.Id))
                              .ToList();
            return cars;
        }
    }
}
