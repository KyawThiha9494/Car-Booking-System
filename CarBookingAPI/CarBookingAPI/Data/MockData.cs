using CarBookingAPI.Models;

namespace CarBookingAPI.Data
{
    public class MockData
    {
        public static List<Car> Cars = new List<Car>
        {
         new Car(1, "Toyota Corolla", 30m, "/assets/image/2024_Toyota_Corolla.jpg", "ABC123", "4-door sedan, 5 seats, automatic transmission"),
                new Car(2, "Honda Civic", 35m, "/assets/image/2024_Honda_Civic.jpg", "XYZ456", "Compact sedan, 5 seats, CVT transmission"),
                new Car(3, "Ford Focus", 28m, "/assets/image/2024_Ford_Focus.jpg", "LMN789", "Compact hatchback, 5 seats, manual transmission"),
                new Car(4, "Chevrolet Malibu", 40m, "/assets/image/2024_Chevrolet_Malibu.jpg", "PQR012", "Midsize sedan, 5 seats, automatic transmission"),
                new Car(5, "Nissan Altima", 33m, "/assets/image/2024_Nissan_Altima.jpg", "STU345", "Midsize sedan, 5 seats, CVT transmission"),
                new Car(6, "Hyundai Elantra", 29m, "/assets/image/2024_Hyundai_Elantra.jpg", "VWX678", "Compact sedan, 5 seats, automatic transmission")
        };

        public static List<Booking> Bookings = new List<Booking>
        {
            new Booking { 
                Id = 1, 
                BookingNo = "B001", 
                CustomerName = "John Doe", 
                CarId = 1, 
                RentalRate = 50, 
                StartDate = DateTime.Now, 
                EndDate = DateTime.Now.AddDays(1), 
                Car = Cars[0] 
            }
        };
    }
}
