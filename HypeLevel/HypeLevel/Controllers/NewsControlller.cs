using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Domain.Models;
using Microsoft.AspNetCore.Http;
using NewsViewModel = HypeLevel.ViewModels.NewsViewModel;
using Abp.IO.Extensions;

namespace HypeLevel.Controllers
{
    [Route("api/[controller]")]
    public class NewsController : Controller
    {
        private DarkContext db;
        
        public NewsController(DarkContext db)
        {
            this.db = db;
        }

        private static NewsViewModel[] testNews = new[]
        {
            new NewsViewModel{Name = "hi", Id = 1, Data = "koliujh"},
            new NewsViewModel{Name = "Lol", Id = 2, Data = "Lpoi"},
            new NewsViewModel{Name = "Mand", Id = 3, Data = "niuy"},
            new NewsViewModel{Name = "hi", Id = 4, Data = "koliujh"},
            new NewsViewModel{Name = "Lol", Id = 5, Data = "Lpoi"},
            new NewsViewModel{Name = "Mand", Id = 6, Data = "niuy"},
            new NewsViewModel{Name = "hi", Id = 1, Data = "koliujh"},
            new NewsViewModel{Name = "Lol", Id = 2, Data = "Lpoi"},
            new NewsViewModel{Name = "Mand", Id = 3, Data = "niuy"},
            new NewsViewModel{Name = "hi", Id = 4, Data = "koliujh"},
            new NewsViewModel{Name = "Lol", Id = 5, Data = "Lpoi"},
            new NewsViewModel{Name = "Mand", Id = 6, Data = "niuy"},
            new NewsViewModel{Name = "hi", Id = 1, Data = "koliujh"},
            new NewsViewModel{Name = "Lol", Id = 2, Data = "Lpoi"},
            new NewsViewModel{Name = "Mand", Id = 3, Data = "niuy"},
            new NewsViewModel{Name = "hi", Id = 4, Data = "koliujh"},
            new NewsViewModel{Name = "Lol", Id = 5, Data = "Lpoi"},
            new NewsViewModel{Name = "Mand", Id = 6, Data = "niuy"},
            new NewsViewModel{Name = "hi", Id = 1, Data = "koliujh"},
            new NewsViewModel{Name = "Lol", Id = 2, Data = "Lpoi"},
            new NewsViewModel{Name = "Mand", Id = 3, Data = "niuy"},
            new NewsViewModel{Name = "hi", Id = 4, Data = "koliujh"},
            new NewsViewModel{Name = "Lol", Id = 5, Data = "Lpoi"},
            new NewsViewModel{Name = "Mand", Id = 6, Data = "niuy"},

        };

        [HttpPost]
        [Route("createNews")]
        public dynamic CreateNews(IFormCollection form)
        {
            try
            {
                News news = MapFormCollectionToNews(form);
                foreach (var file in form.Files)
                {
                    news.ImagePath = SaveNewsImageAndReturnRootPath(file, news);
                }

                db.News.Add(news);
                db.SaveChanges();

                return new { Success = true };
            }
            catch (Exception ex)
            {
                return new { Success = false, ex.Message };
            }
        }

        [HttpPut]
        [Route("updateNews")]
        public  dynamic UpdateNews(IFormCollection form)
        {
            try
            {
                News news = MapFormCollectionToNews(form);
                foreach (var file in form.Files)
                {
                    news.ImagePath = SaveNewsImageAndReturnRootPath(file, news);
                }

                News findedNews = db.News.FirstOrDefault(f => f.Id == news.Id);

                findedNews.Data = news.Data;
                findedNews.ImagePath = news.ImagePath;
                db.SaveChanges();

                return new { Success = true };
            }
            catch (Exception ex)
            {
                return new { Success = false, ex.Message };
            }
        }

        [HttpGet("[action]")]
        public  IEnumerable<News> GetNews(int startNewsindex)
        {
            IEnumerable<News> news = new List<News>();
            if (db.News.Any())
            {
                news = db.News.ToList();
            }

            return news;
        }

        [HttpGet("[action]")]
        public IEnumerable<NewsViewModel> GetNewsCollection(int id)
        {
            return null;
        }

        private static News MapFormCollectionToNews(IFormCollection form)
        {
            var news = new News();
            string nameKey = "name";
            string dataKey = "data";
            if (form.Any())
            {
                if (form.Keys.Contains(nameKey))
                    news.Name = form[nameKey];
                if (form.Keys.Contains(dataKey))
                    news.Data = form[dataKey];
            }

            return news;
        }

        private static string SaveNewsImageAndReturnRootPath(IFormFile file, News news)
        {
            if (file == null || file.Length == 0)
                throw new Exception("File is empty!");
            var pathToDb = $"/images/{news.Id}-{news.Name}.jpg";
            var pathToSave = $"static{pathToDb}";
            var location = Directory.GetCurrentDirectory();

            using (var stream = file.OpenReadStream())
            using (var imageStream = System.IO.File.Create($"{location}/{pathToSave}"))
            {
                var bytes = stream.GetAllBytes();
                imageStream.Write(bytes);
            }

            return pathToDb;
        }
    }
}