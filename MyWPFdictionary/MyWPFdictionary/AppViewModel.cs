using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text.RegularExpressions;
using System.Windows;
using MyWPFdictionary.Annotations;
using MyWPFdictionary.Helpers;

namespace MyWPFdictionary
{
    public class AppViewModel : DependencyObject, INotifyPropertyChanged
    {
        public AppViewModel(WordRepository repository, List<string> rowCollectionList)
        {
            selectedWord = new WordWithTranslate {Word = "", Translate = ""};
            this.repository = repository;
            ShowCollection = new ObservableCollection<string>(rowCollectionList
                .Select(w => w.ToLower()));
            FindedCollection = new ObservableCollection<string>();
            dictionary = repository.GetWordsDictionaryFromText(ShowCollection);
            revertDictionary = ReverseDictionary(dictionary);
        }

        private WordWithTranslate selectedWord;
        private string findedTranslate;
        private readonly WordRepository repository;
        private IDictionary<string, string> dictionary;
        private IDictionary<string, string> revertDictionary;

        public ObservableCollection<string> ShowCollection { get; set; }
        public ObservableCollection<string> FindedCollection { get; set; }
        
        public WordWithTranslate SelectedWord
        {
            get { return selectedWord; }
            set
            {
                selectedWord = value;
                OnPropertyChanged("SelectedWord");
            }
        }

        public string FindedTranslate
        {
            get
            {
                return findedTranslate; 
            }
            set
            {
                findedTranslate = value;
                OnPropertyChanged("FindedTranslate");
            }
        }

        private RelayCommand addCommand;

        public RelayCommand AddCommand
        {
            get
            {
                return addCommand ??
                       (addCommand = new RelayCommand(obj =>
                       {
                           var word = obj as WordWithTranslate;
                           selectedWord = word;
                           if (!string.IsNullOrWhiteSpace(word.Word)
                            && !string.IsNullOrWhiteSpace(word.Translate))
                           {
                               AddWordWithTranslate(word.Word, word.Translate);
                           }
                       }));
            }
        }

        private RelayCommand searchCommand;

        public RelayCommand SearchCommand
        {
            get
            {
                return searchCommand ??
                       (searchCommand = new RelayCommand(obj =>
                       {
                           var word = (string)obj;

                           if (dictionary.ContainsKey(word))
                           {
                               string finded = dictionary[word];
                               SelectedWord.Translate = finded;
                               FindedTranslate = finded;
                           }
                           else if (revertDictionary.ContainsKey(word))
                           {
                               string finded = revertDictionary[word];
                               SelectedWord.Translate = finded;
                               FindedTranslate = finded;
                           }
                           else
                           {
                               SelectedWord.Translate = "";
                               FindedTranslate = "";
                           }
                       }));
            }
        }

        private RelayCommand searchForCollectionCommand;

        public RelayCommand SearchForCollectionCommand
        {
            get
            {
                return searchForCollectionCommand ??
                       (searchForCollectionCommand = new RelayCommand(obj =>
                       {
                           var word = ((string) obj).ToLower();
                           FindedCollection.Clear();
                           IDictionary<string, string> resDictionary = new Dictionary<string, string>();

                           if (!string.IsNullOrWhiteSpace(word))
                           {
                               Language lang = SymbolIsEnglish(word);
                               if (lang == Language.English)
                               {
                                   resDictionary = dictionary;
                               }else if (lang == Language.Russian)
                               {
                                   resDictionary = revertDictionary;
                               }
                           }

                           IEnumerable<string> finded = string.IsNullOrEmpty(word)
                                    ? new List<string>() : resDictionary.Keys.Where(k => k.StartsWith(word));
                           foreach (var s in finded)
                           {
                               FindedCollection.Add($"{s} - {resDictionary[s]}");
                           }
                       }));
            }
        }

        private RelayCommand saveChangesCommand;

        public RelayCommand SaveChangesCommand
        {
            get
            {
                return saveChangesCommand ??
                       (saveChangesCommand = new RelayCommand(obj =>
                       {
                           repository.SaveChanges(dictionary);
                       }));
            }
        }

        private void AddWordWithTranslate(string word, string translate)
        {
            string value;
            dictionary.TryGetValue(word, out value);
            string pattern = @"([a-zA-Z\s]+)(\s[--–—]\s+)([а-яА-ЯёЁ,\s]+)";
            Regex rgx = new Regex(pattern, RegexOptions.IgnoreCase);
            if (rgx.IsMatch($"{word} - {translate}"))
            {
                if (!dictionary.ContainsKey(word))
                {
                    dictionary.Add(word, translate);
                    string keyForRevert = revertDictionary.ContainsKey(translate) ?
                        $"{translate}+" : translate;
                    revertDictionary.Add(keyForRevert, word);
                    ShowCollection.Add($"{word.ToLower()} - {translate.ToLower()}");
                }
                else if (dictionary.ContainsKey(word))
                {
                    for (int i = 0; i < ShowCollection.Count; i++)
                    {
                        MatchCollection matches = rgx.Matches(ShowCollection[i]);
                        GroupCollection groups = matches[0].Groups;

                        var findedWord = groups[1].ToString().ToLower();
                        if (string.Compare(
                                findedWord,
                                word,
                                StringComparison.InvariantCultureIgnoreCase) == 0)
                        {
                            ShowCollection[i] = $"{word} - {translate}";
                            dictionary[word] = translate;
                        }
                    }
                }
            }
               
        }

        private Language SymbolIsEnglish(string word)
        {
            Language result = word.All(w => (w >= 'a') && (w <= 'z'))
                ? Language.English
                : word.All(w => (w >= 'а') && (w <= 'я'))
                ? Language.Russian
                : 0;
            return result;
        }

        private IDictionary<string, string> ReverseDictionary(IDictionary<string, string> inputDictionary)
        {
            Dictionary<string, string> result = new Dictionary<string, string>();
            foreach (var keyValuePair in inputDictionary)
            {
                string key = result.ContainsKey(keyValuePair.Value) ? 
                    $"{keyValuePair.Value}+" : keyValuePair.Value;
                result.Add(key, keyValuePair.Key);
            }

            return result;
        }

        public event PropertyChangedEventHandler PropertyChanged;
        [NotifyPropertyChangedInvocator]
        protected virtual void OnPropertyChanged([CallerMemberName] string propertyName = null)
        {
            PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));
        }
    }
}