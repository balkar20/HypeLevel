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
        //static AppViewModel()
        //{
        //    WordWithTranslateProperty = DependencyProperty.Register(
        //        "SelectedWord",
        //        typeof(WordWithTranslate),
        //        typeof(AppViewModel));
        //}
        public AppViewModel(WordRepository repository)
        {
            selectedWord = new WordWithTranslate();
            this.repository = repository;
            ShowCollection = new ObservableCollection<string>(FileHelper.ReadAsListString(typeof(AppViewModel), "./files/words1.txt")); ;
            dictionary = repository.GetWordsDictionaryFromText(ShowCollection);
        }

        public static readonly DependencyProperty WordWithTranslateProperty;
        public static readonly DependencyProperty FindedTRanslateProperty;
        private IDictionary<string, string> dictionary;
        public ObservableCollection<string> ShowCollection { get; set; }
        private WordWithTranslate selectedWord;
        private string findedTranslate;
        private readonly WordRepository repository;
        
        public WordWithTranslate SelectedWord
        {
            get
            {
                //return (WordWithTranslate) GetValue(WordWithTranslateProperty);
                return selectedWord ;
            }
            set
            {
                //SetValue(WordWithTranslateProperty, value);
                //if (!string.IsNullOrEmpty(value.Word))
                //{
                //    selectedWord.Word = value.Word;
                //}
                selectedWord = value;
                ////FindedTranslate = dictionary[selectedWord.Word];
                OnPropertyChanged("SelectedWord");
            }
        }

        public string FindedTranslate
        {
            get
            {
                return String.IsNullOrEmpty(selectedWord.Translate) ? "not found" : selectedWord.Translate;
            }
            set
            {
                findedTranslate = selectedWord.Translate;
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
                               findedTranslate = dictionary[word];
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
                    Word = word,
                    Translate = translate
                },"files\\words1.txt");
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