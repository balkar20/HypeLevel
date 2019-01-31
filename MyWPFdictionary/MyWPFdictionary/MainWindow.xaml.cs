using System.Windows;
using System.Windows.Controls;
using System.Windows.Input;
using MyWPFdictionary.Helpers;

namespace MyWPFdictionary
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
            DataContext = new AppViewModel(new WordRepository(), FileHelper.ReadAsListString(typeof(MainWindow), "./files/words1.txt"));
        }

        private void UIElement_OnKeyUp(object sender, KeyEventArgs e)
        {
            string text = ((TextBox)sender).Text;
            var context = ((AppViewModel)DataContext);
            if (string.IsNullOrEmpty(text))
            {
                context.FindedCollection.Clear();
            }
            context.SearchCommand.Execute(text);
            context.SearchForCollectinCommand.Execute(text);

        }
    }
}
