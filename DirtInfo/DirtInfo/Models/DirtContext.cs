using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage;

namespace DirtInfo.Models
{
    public class DirtContext : DbContext
    {
        public DbSet<News> News { get; set; }
        public DirtContext(DbContextOptions<DirtContext> options)
            : base(options)
        {
            Database.EnsureCreated();
        }
    }
}