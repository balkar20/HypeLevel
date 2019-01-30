﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;
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

        private void UIElement_OnKeyDown(object sender, KeyEventArgs e)
        {
            if (e.Key == Key.Return)
            {
                var context = ((AppViewModel) DataContext);
                context.SearchCommand.Execute(((TextBox)sender).Text);
                ApplicationCommands.Copy.Execute(((TextBox)sender), ((TextBox)sender));
            }
            else
            {
                txbx_translate.Text = "";
                txbx_finded.Text = "";
            }
        }
    }
}
