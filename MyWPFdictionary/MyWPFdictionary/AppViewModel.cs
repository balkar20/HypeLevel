using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel;
using System.IO;
using System.Linq;
using System.Reactive.Linq;
using System.Runtime.CompilerServices;
using System.Windows;
using MyWPFdictionary.Annotations;
using MyWPFdictionary.Helpers;


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
            dictionary = repository.GetWordsDictionaryFromText(ShowCollection);
        }

        private IDictionary<string, string> dictionary;
        public ObservableCollection<string> ShowCollection { get; set; }
        private WordWithTranslate selectedWord;
        private string findedTranslate;
        private readonly WordRepository repository;
        
        public WordWithTranslate SelectedWord
        {
            get
            {
                return selectedWord;
            }
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
                           else
                           {
                               SelectedWord.Translate = "";
                               FindedTranslate = "";
                           }
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
                repository.AddWordAndTranslateToFile(new WordWithTranslate()
                {
                    Word = word.ToLower(),
                    Translate = translate.ToLower()
                },"files\\words1.txt");
                ShowCollection.Add($"{word.ToLower()} - {translate.ToLower()}");
            }
            else
            {
                string finded = this.dictionary[word];
                this.dictionary[word] = translate;

            }
        }



        public event PropertyChangedEventHandler PropertyChanged;
        [NotifyPropertyChangedInvocator]
        protected virtual void OnPropertyChanged([CallerMemberName] string propertyName = null)
        {
            PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));
        }
    }
}