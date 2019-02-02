using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Data.Entity;
using System.Linq;
using System.Windows.Controls;
using MyWPFdictionary.Helpers;
using MyWPFdictionary.Models;

namespace MyWPFdictionary.dataBase
{
    public class WordDbInitializer : DropCreateDatabaseIfModelChanges<DictionaryContext>
    {
        protected override void Seed(DictionaryContext context)
        {
            List<string> listFomFile = FileHelper.ReadAsListString(typeof(MainWindow), "./files/words1.txt");
            var dictionary = new WordRepository().GetWordsDictionaryFromText(listFomFile);

            foreach (var keyValuePair in dictionary)
            {
                if (!string.IsNullOrWhiteSpace(keyValuePair.Key))
                {
                    context.WordWithTranslates.Add(new WordWithTranslate()
                    {
                        Word = keyValuePair.Key,
                        Translate = keyValuePair.Value
                    });
                }
            }

            context.SaveChanges();
        }

    }
}