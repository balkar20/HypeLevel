using System.ComponentModel;
using System.Runtime.CompilerServices;
using MyWPFdictionary.Annotations;

namespace MyWPFdictionary
{
    public class WordWithTranslate : INotifyPropertyChanged
    {
        private string word;
        private string translate;

        public string Word {
            get { return word; }
            set
            {
                word = value;
                OnPropertyChanged("Word");
            }
        }
        public string Translate
        {
            get { return translate; }
            set
            {
                word = value;
                OnPropertyChanged("Translate");
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