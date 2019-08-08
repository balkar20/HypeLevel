namespace di2.Models
{
    public class Rebuttal
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public News News { get; set; }
        public string Content { get; set; }
        public Media Media { get; set; }
    }
}