using Microsoft.EntityFrameworkCore.Design;

namespace di2.Models
{
    public class News
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public int Content { get; set; }
        public int Picture { get; set; }
    }
}