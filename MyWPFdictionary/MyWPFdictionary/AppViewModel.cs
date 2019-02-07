using System;
using System.Collections;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Windows;
using System.Windows.Forms;
using MyWPFdictionary.Annotations;
using MyWPFdictionary.dataBase;

namespace MyWPFdictionary
{
    public class AppViewModel : DependencyObject, INotifyPropertyChanged
    {
        public AppViewModel(WordRepository repository, List<string> rowCollectionList)
        {
            selectedWord = new WordWithTranslate(){Word = "", Translate = ""};
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
        public IDictionary<string, string> dictionary;
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
                           AddWordWithTranslate(word.Word, word.Translate);
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
                           var word = (string) obj;

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

                           char sym;
                           if (!string.IsNullOrWhiteSpace(word))
                           {
                               sym = word[0];

                               if ((sym >= 'а') && (sym <= 'я'))
                               {
                                  resDictionary = revertDictionary;
                               }
                               else if ((sym >= 'a') && (sym <= 'z'))
                               {
                                  resDictionary = dictionary;
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
                           this.repository.SaveChanges(this.dictionary);
                       }));
            }
        }

        private void AddWordWithTranslate(string word, string translate)
        {
            string value;
            this.dictionary.TryGetValue(word, out value);
            if (string.IsNullOrEmpty(value))
            {
                this.dictionary.Add(word, translate);
                //repository.AddWordAndTranslateToFile(new WordWithTranslate() 
                //{
                //    Word = word.ToLower(),
                //    Translate = translate.ToLower()
                //},"files\\words1.txt");
                ShowCollection.Add($"{word.ToLower()} - {translate.ToLower()}");
            }
            else
            {
                string finded = this.dictionary[word];
                this.dictionary[word] = translate;

            }
        }

        private bool SymbolIsEnglish(char symbol)
        {
            bool result = false;
            if ((symbol >= 'а') && (symbol <= 'я'))
            {
                result = false;
            }
            else if ((symbol >= 'a') && (symbol <= 'z'))
            {
                result = true;
            }

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