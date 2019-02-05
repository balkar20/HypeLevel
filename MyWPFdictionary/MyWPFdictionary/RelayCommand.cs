using System;
using System.Windows.Input;
using MyWPFdictionary.Annotations;

namespace MyWPFdictionary
{
    public class RelayCommand : ICommand
    {
        private Action<object> execute;

        public RelayCommand(Action<object> execute)
        {
            this.execute = execute;
        }

        public bool CanExecute(object parameter)
        {
            return execute != null ? true : false;
        }

        public void Execute([CanBeNull] object parameter)
        {
            this.execute(parameter);
        }

        public event EventHandler CanExecuteChanged;
    }
}