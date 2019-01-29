using System.ComponentModel;
using System.Runtime.CompilerServices;
using Arena.Annotations;

namespace Arena
{
    public class ViewModel : INotifyPropertyChanged
    {
        public ViewModel()
        {
            Phone = new Phone() { Title = "kjkj", Company = "kkkkk"};

        }

        private Phone phone;

        public Phone Phone
        {
            get { return phone; }
            set
            {
                phone = value;
                OnPropertyChanged("Phone");
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