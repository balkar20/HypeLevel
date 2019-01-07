using Microsoft.EntityFrameworkCore;

namespace Domain.Models
{
    public class DarkContext : DbContext
    {
        public DbSet<News> News { get; set; }
        public DarkContext(DbContextOptions<DarkContext> options)
            : base(options)
        {
            Database.EnsureCreated();
        }
    }
}