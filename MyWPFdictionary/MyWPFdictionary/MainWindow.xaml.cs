using System;
using System.ComponentModel;
using System.Diagnostics;
using System.Windows;
using MyWPFdictionary.Helpers;
using KeyEventArgs = System.Windows.Input.KeyEventArgs;
using MessageBox = System.Windows.MessageBox;
using TextBox = System.Windows.Controls.TextBox;

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
            OnLoaded();
            DataContext = new AppViewModel(new WordRepository());
            this.Closing += OnClosing;
        }

        private void OnLoaded()
        {
            try
            {
                string pathForGit = FileHelper.GetPathForRoot("files/");
                string path = FileHelper.GetPathForRoot("files/gitPull.bat");
                Process ps = Process.Start(path, pathForGit);
                ps.WaitForExit();
            }
            catch (Exception e)
            {
                MessageBox.Show(e.Message);
            }
        }

        private void OnClosing(object sender, CancelEventArgs cancelEventArgs)
        {

            MessageBoxResult result = MessageBox.Show("Do you want to push changes?", "Warning",
                MessageBoxButton.YesNo,
                MessageBoxImage.Question);
            var context = ((AppViewModel)DataContext);
            context.SaveChangesCommand.Execute(null);
            if (result == MessageBoxResult.Yes)
            {
                try
                {
                    string pathForGit = FileHelper.GetPathForRoot("files/");
                    string path = FileHelper.GetPathForRoot("files/gitPush.bat");
                    Process.Start(path, $"{pathForGit} {DateTime.Now.ToString()}");
                }
                catch (Exception e)
                {
                    MessageBox.Show(e.Message);
                }
            }
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
            context.SearchForCollectionCommand.Execute(text);

        }
    }
}
