using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.RegularExpressions;

namespace MyWPFdictionary
{
    public class WordRepository
    {
        private readonly Dictionary<string, string> words;
        private readonly List<string> stringWords;

        //public WordRepository(string documentPath)
        //{
        //    this.words  = GetWordsDictionaryFromText(documentPath);
        //    this.stringWords = Get;
        //}

        //public List<string> GetWordsFromText(string text)
        //{
            

        //}
        public void AddWordAndTranslateToFile(WordWithTranslate wordWithTranslate, string pathForRoot)
        {
            try
            {
                string lPath;
                string location = AppDomain.CurrentDomain.BaseDirectory + $"{pathForRoot}";
                int index;
                index = location.IndexOf("bin");
                if (index > 0)
                {
                    lPath = location.Remove(index, 10);
                }
                else
                {
                    lPath = location;
                }

                using (var stream = new FileStream(lPath, FileMode.Append, FileAccess.Write))
                using (var writer = new StreamWriter(stream))
                {
                    writer.WriteLine($"{wordWithTranslate.Word} - {wordWithTranslate.Translate}");
                }
            }
            catch (Exception e)
            {
                throw new FileLoadException(e.Message);
            }
            
        }
        public Dictionary<string, string> GetWordsDictionaryFromText(ICollection<string> lines)
        {
            Dictionary<string, string> dictionary = new Dictionary<string, string>();
            string pattern = @"([a-zA-Z]+)(\s[--–—]\s+)([а-яА-ЯёЁ]+)";
            Regex rgx = new Regex(pattern, RegexOptions.IgnoreCase);
            
            foreach (var line in lines)
            {
                MatchCollection matches = rgx.Matches(line);
                if (matches.Count > 0)
                {
                    GroupCollection groups = matches[0].Groups;

                    var word = groups[1].ToString();
                    var translate = groups[3].ToString();

                    if (!dictionary.ContainsKey(word))
                    {
                        dictionary.Add(word, translate);
                    }
                }
            }

            return dictionary;
        }
    }
}