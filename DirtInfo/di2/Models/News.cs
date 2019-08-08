using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Design;

namespace di2.Models
{
    public class News
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        public Media Media { get; set; }
        public int Rating { get; set; }
        public NewsSection NewsSection { get; set; }
        public IEnumerable<Rebuttal> RebbRebuttals { get; set; }
    }

    public enum NewsSection
    {
        Politic,
        War,
        Auto,
        Business,
        Nature,
        Show,
        Technologies
    }
}