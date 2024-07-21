using CarBookingAPI.Database;
using CarBookingAPI.Services.IServices;
using CarBookingAPI.Services.MockServiceImplementations;
using CarBookingAPI.Services.ServiceImplementations;
using Microsoft.AspNetCore.Cors.Infrastructure;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
var useMockData = builder.Configuration.GetValue<bool>("UseMockData");


// Add services to the container.
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowSpecificOrigin",
        builder =>
        {
            builder.WithOrigins("http://localhost:4200") 
                   .AllowAnyMethod()
                   .AllowAnyHeader();
        });
});

builder.Services.AddControllers();

builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlite("Data Source=Data/CarBookingDB.db"));

if (useMockData)
{
    builder.Services.AddSingleton<ICarService, MockCarService>();
    builder.Services.AddSingleton<IBookingService, MockBookingService>();
}
else {
    builder.Services.AddScoped<ICarService, CarService>();
    builder.Services.AddScoped<IBookingService, BookingService>();
}
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors("AllowSpecificOrigin");

app.UseAuthorization();

app.MapControllers();

app.Run();
