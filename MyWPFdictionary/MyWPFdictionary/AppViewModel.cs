using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel;
using System.Runtime.CompilerServices;
using MyWPFdictionary.Annotations;
using Observables.Specialized.Extensions;

namespace MyWPFdictionary
{
    public class AppViewModel : INotifyPropertyChanged
    {
        IObservableDictionary<string, string> dectionary = new ObservableDictionary<string, string>();

        public WordWithTranslate SelectedWord;

        private RelayCommand addCommand;

        public RelayCommand AddCommand
        {
            get
            {
                return addCommand ??
                       (addCommand = new RelayCommand(obj =>
                       {
                           var word = (WordWithTranslate) obj;
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
            this.dectionary.TryGetValue(word, out value);
            if (string.IsNullOrEmpty(value))
            {
                this.dectionary.Add(word, translate);
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