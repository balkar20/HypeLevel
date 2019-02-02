using System.ComponentModel.DataAnnotations;

namespace MyWPFdictionary.Models
{
    public class WordModel
    {
        public int Id { get; set; }
        public string Word { get; set; }
        public string Translate { get; set; }
    }
}