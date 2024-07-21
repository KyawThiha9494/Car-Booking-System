namespace CarBookingAPI.Models
{
    public class Car
    {
        public int Id { get; set; }
        public string Model { get; set; }
        public decimal PricePerDay { get; set; }
        public string ImageUrl { get; set; }
        public string VehicleNo { get; set; }
        public string Specifications { get; set; }

        public Car(int id, string model, decimal pricePerDay, string imageUrl, string vehicleNo, string specifications)
        {
            Id = id;
            Model = model;
            PricePerDay = pricePerDay;
            ImageUrl = imageUrl;
            VehicleNo = vehicleNo;
            Specifications = specifications;
        }
    }
}
