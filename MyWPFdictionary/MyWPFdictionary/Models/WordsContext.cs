using System.Data.Entity;
using MyWPFdictionary.dataBase;

namespace MyWPFdictionary.Models
{
    public class WordsContext : DbContext
    {
        public WordsContext(string nameOrConnectionString) 
            : base(nameOrConnectionString)
        {

        }

        //static WordsContext()
        //{
        //    System.Data.Entity.Database.SetInitializer(new WordDbInitializer());
        //}

        public DbSet<WordModel> Words { get; set; }
    }
}