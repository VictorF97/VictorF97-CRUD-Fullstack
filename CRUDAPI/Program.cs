using System.Text.Json.Serialization;
using CRUDAPI.Models;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors();

//ignora sequencia ciclicas
builder.Services.AddControllers().AddJsonOptions( options => options.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles);

string? mySqlConnection = builder.Configuration.GetConnectionString("MySql");

builder.Services.AddDbContext<Contexto>(options => options.UseMySql(mySqlConnection, ServerVersion.AutoDetect(mySqlConnection)));

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();
app.UseCors(options => options.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader().AllowAnyOrigin());
app.Run();