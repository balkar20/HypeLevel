﻿using System;
using System.ComponentModel;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Windows;
using System.Windows.Input;
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
            this.
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

        private void txbxWord_OnKeyUp(object sender, KeyEventArgs e)
        {
            string text = ((TextBox)sender).Text;
            var context = ((AppViewModel)DataContext);
            if (string.IsNullOrEmpty(text))
            {
                context.FindedCollection.Clear();
            }

            if (isInWhole.IsChecked == true)
            {
                context.SearchInWholeCommand.Execute(text);
            }
            else
            {
                context.SearchCommand.Execute(text);
            }

            context.SearchForCollectionCommand.Execute(text);
        }


        private void txbxWord_OnKeyDown(object sender, KeyEventArgs e)
        {
            string text = ((TextBox)sender).Text;
            var context = ((AppViewModel)DataContext);

            if (e.Key == Key.Right && txtbx_word.CaretIndex >= text.Length)
            {
                txbx_translate.Focus();
                e.Handled = true;
            }
            
        }

        private void Txbx_translate_OnKeyDown(object sender, KeyEventArgs e)
        {
            if (e.Key == Key.Enter)
            {
                var context = ((AppViewModel)DataContext);
                context.AddCommand.Execute(context.SelectedWord);
                e.Handled = true;
            }
            if (e.Key == Key.Left && txbx_translate.CaretIndex == 0)
            {
                txtbx_word.Focus();
                e.Handled = true;
            }
        }

        private void ButtonBase_OnClick(object sender, RoutedEventArgs e)
        {
            var file = txbx_setName.Text;
            string rootPath = FileHelper.GetPathForRoot($"files/{file}");
            var context = ((AppViewModel)DataContext);
            string messageBoxText = $"Do you wannt to add set:{file}?";
            string caption = "Changing word";
            MessageBoxButton button = MessageBoxButton.YesNo;
            MessageBoxImage icon = MessageBoxImage.Question;
            MessageBoxResult result = MessageBox.Show(messageBoxText, caption, button, icon);
            if (result == MessageBoxResult.Yes)
            {
                try
                {
                    File.Create($"{rootPath}.txt");
                    context.Filesnames.Add(txbx_setName.Text);
                }
                catch (Exception exception)
                {
                    MessageBox.Show(exception.ToString());
                }
            }

        }

        private void IsInWhole_Checked(object sender, RoutedEventArgs e)
        {
            //var context = ((AppViewModel)DataContext);
            //context.SearchInWholeCommand.Execute(context.SelectedWord);
            //e.Handled = true;
        }
    }
}
