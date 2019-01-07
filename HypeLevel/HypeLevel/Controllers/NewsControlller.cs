using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Web;
using Domain.Models;
using Microsoft.AspNetCore.Http;
using NewsViewModel = HypeLevel.ViewModels.NewsViewModel;

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
            News saved;
            try
            {
                News news = MapFormCollectionToNews(form);
                foreach (var file in form.Files)
                {
                    news.Image = MapFileToByteArray(file);
                }
                

                db.News.Add(news);
                db.SaveChanges();

                saved = db.News.FirstOrDefault();

                return new { Success = true };
            }
            catch (Exception ex)
            {
                return new { Success = false, ex.Message };
            }
            //News news = new News();
            //if (newsViewModel.Image != null)
            //{
            //    byte[] imageData = null;
            //    // считываем переданный файл в массив байтов
            //    using (var binaryReader = new BinaryReader(newsViewModel.Image.OpenReadStream()))
            //    {
            //        imageData = binaryReader.ReadBytes((int)newsViewModel.Image.Length);
            //    }
            //    // установка массива байтов
            //    news.Image = imageData;
            //}

            

            //return RedirectToAction("NewsCreated");
        }

        [HttpGet("[action]")]
        public async Task<IEnumerable<NewsViewModel>> GetNews(int startNewsindex)
        {
            if (db.News.Any())
            {
                var saved = db.News.FirstOrDefault();
                return testNews;
            }

            return testNews;
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

        private static byte[] MapFileToByteArray(IFormFile file)
        {
            if (file == null || file.Length == 0)
                throw new Exception("File is empty!");
            byte[] fileArray;
            using (var stream = file.OpenReadStream())
            using (var memoryStream = new MemoryStream())
            {
                stream.CopyTo(memoryStream);
                fileArray = memoryStream.ToArray();
            }

            return fileArray;
        }
    }
}