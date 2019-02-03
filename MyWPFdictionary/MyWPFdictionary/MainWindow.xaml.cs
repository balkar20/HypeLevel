using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Diagnostics;
using System.Linq;
using System.Windows;
using System.Windows.Forms;
using MyWPFdictionary.dataBase;
using MyWPFdictionary.Helpers;
using MyWPFdictionary.Models;
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
            DataContext = new AppViewModel(new WordRepository(), FileHelper.ReadAsListString(typeof(MainWindow), "./files/words1.txt"));
            this.Closing += OnClosing;
            this.Loaded += OnLoaded;
        }

        private void OnLoaded(object sender, RoutedEventArgs routedEventArgs)
        {
            try
            {
                string pathForGit = FileHelper.GetPathForRoot("files/");
                string path = FileHelper.GetPathForRoot("files/gitPull.bat");
                Process.Start(path, pathForGit);
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
            context.SearchForCollectinCommand.Execute(text);

        }
    }
}
