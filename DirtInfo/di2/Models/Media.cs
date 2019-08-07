namespace di2.Models
{
    public class Media
    {
        public int Id { get; set; }
        public string Path { get; set; }
        public MediaType MediaType { get; set; }
    }

    public enum MediaType
    {
        Image,
        Video
    }
}