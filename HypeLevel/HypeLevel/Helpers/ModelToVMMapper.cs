using System.IO;
using Domain.Models;
using HypeLevel.ViewModels;
using Microsoft.AspNetCore.Http.Internal;

namespace HypeLevel.Helpers
{
    public class ModelToVMMapper
    {
        public static NewsViewModel MapNewsToViewModel(News news)
        {
            NewsViewModel result = new NewsViewModel();
            result.Name = news.Name;
            result.Data = news.Data;
            result.Id = news.Id;
            result.ImagePath =  news.ImagePath;

            return result;
        }
    }
}