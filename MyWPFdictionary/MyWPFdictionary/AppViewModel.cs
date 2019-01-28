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
using Observables.Specialized.Extensions;

namespace MyWPFdictionary
{
    public class AppViewModel : INotifyPropertyChanged
    {
        private IDictionary<string, string> dictionary;
        public ObservableCollection<string> ShowCollection { get; set; }
        private WordWithTranslate selectedWord;
        private readonly WordRepository repository;


        public AppViewModel(WordRepository repo)
        {
            ShowCollection = new ObservableCollection<string>(FileHelper.ReadAsListString(typeof(AppViewModel), "./files/words1.txt")); ;
            dictionary = repo.GetWordsDictionaryFromText(ShowCollection);
        }

        public WordWithTranslate SelectedWord
        {
            get
            {
                return selectedWord == null ? new WordWithTranslate(){Word = "hello", Translate = "привет"}: selectedWord;
            }
            set
            {
                selectedWord = value;
                OnPropertyChanged("SelectedWord");
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
                           var word = (WordWithTranslate) obj;
                           AddWordWithTranslate(word.Word, word.Translate);
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
                    Word = word,
                    Translate = translate
                }, FileHelper.ReadAsStream(typeof(AppViewModel), "./files/words1.txt"));
                ShowCollection.Add($"{word} - {translate}");
            }
        }

        public event PropertyChangedEventHandler PropertyChanged;
        public void OnPropertyChanged([CallerMemberName]string prop = "")
        {
            if (PropertyChanged != null)
                PropertyChanged(this, new PropertyChangedEventArgs(prop));
        }
    }
}