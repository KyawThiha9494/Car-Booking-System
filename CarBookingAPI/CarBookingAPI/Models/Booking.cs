namespace CarBookingAPI.Models
{
    public class Booking
    {
        public int Id { get; set; }
        public string BookingNo { get; set; }
        public string CustomerName { get; set; }
        public int CarId { get; set; }
        public decimal RentalRate { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public Car Car { get; set; }
    }
}
