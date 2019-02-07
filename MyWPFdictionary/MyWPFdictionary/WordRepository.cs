using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.IO;
using System.Reactive.Linq;
using System.Text.RegularExpressions;
using MyWPFdictionary.Helpers;

namespace MyWPFdictionary
{
    public class WordRepository
    {
        private static int addedCounter = 0;
        //public WordRepository(string documentPath)
        //{
        //    this.words  = GetWordsDictionaryFromText(documentPath);
        //    this.stringWords = Get;
        //}

        //public List<string> GetWordsFromText(string text)
        //{
            

        //}

        public void SaveChanges(IDictionary<string, string> wordsTranslates)
        {
            string rootPath = FileHelper.GetPathForRoot("files/words2.txt");
            using (StreamWriter writer = new StreamWriter(rootPath))
            {
                foreach (var keyValuePair in wordsTranslates)
                {
                    writer.WriteLine($"{keyValuePair.Key.TrimEnd()} - {keyValuePair.Value.TrimEnd()}");
                }
            }
        }

        public void AddWordAndTranslateToFile(WordWithTranslate wordWithTranslate, string pathForRoot)
        {
            try
            {
                string lPath = FileHelper.GetPathForRoot(pathForRoot);

                using (var stream = new FileStream(lPath, FileMode.Append, FileAccess.Write))
                using (var writer = new StreamWriter(stream))
                {
                    string stringToSave;
                    if (addedCounter == 0)
                    {
                        stringToSave = $"\n{wordWithTranslate.Word.TrimEnd()} - {wordWithTranslate.Translate.TrimEnd()}";
                    }
                    else
                    {
                        stringToSave = $"{wordWithTranslate.Word.TrimEnd()} - {wordWithTranslate.Translate.TrimEnd()}";
                    }
                        
                    writer.WriteLine(stringToSave);
                    addedCounter++;
                }
            }
            catch (Exception e)
            {
                throw new FileLoadException(e.Message);
            }
            
        }

        public IDictionary<string, string> GetWordsDictionaryFromText(ICollection<string> lines)
        {
            ObservableConcurrentDictionary<string, string> observableConcurrentDictionary = new ObservableConcurrentDictionary<string, string>();
            Dictionary<string, string> dictionary = new Dictionary<string, string>();
            string pattern = @"([a-zA-Z\s]+)(\s[--–—]\s+)([а-яА-ЯёЁ,\s]+)";
            Regex rgx = new Regex(pattern, RegexOptions.IgnoreCase);
            
            foreach (var line in lines)
            {
                MatchCollection matches = rgx.Matches(line);
                if (matches.Count > 0)
                {
                    GroupCollection groups = matches[0].Groups;

                    var word = groups[1].ToString().ToLower();
                    var translate = groups[3].ToString().ToLower();

                    if (!observableConcurrentDictionary.ContainsKey(word) && !string.IsNullOrWhiteSpace(word))
                    {
                        observableConcurrentDictionary.Add(word, translate);
                    }
                }
            }

            return observableConcurrentDictionary;
        }
    }
}