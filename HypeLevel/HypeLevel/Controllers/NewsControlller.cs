﻿using System;
using System.Collections.Generic;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Mime;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Web;
using Domain.Models;
using Microsoft.AspNetCore.Http;
using NewsViewModel = HypeLevel.ViewModels.NewsViewModel;
using System.Drawing.Imaging;
using System.Reflection;
using Abp.IO.Extensions;
using Abp.Reflection.Extensions;

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
                    news.ImagePath = SaveImageWithName(file, news.Name);
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
        }

        [HttpGet("[action]")]
        public  HttpResponseMessage GetNewsImage(int startNewsindex)
        {
            //HttpResponseMessage response;
            //if (db.News.Any())
            //{
            //    var saved = db.News.FirstOrDefault();

            //    byte[] imgData = saved.Image;
            //    MemoryStream ms = new MemoryStream(imgData);

            //    response = new HttpResponseMessage(HttpStatusCode.OK);
            //    response.Content = new StreamContent(ms);
            //    response.Content.Headers.ContentType = new System.Net.Http.Headers.MediaTypeHeaderValue("image/jpg");
            //    return response;
            //}

            return null;
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

        private static string SaveImageWithName(IFormFile file, string name)
        {
            if (file == null || file.Length == 0)
                throw new Exception("File is empty!");
            byte[] fileArray;
            Image image;
            var resultPath = $"/static/images/{name}.img";

            var assembly = (typeof(NewsController).Assembly);
            var location = assembly.GetDirectoryPathOrNull();

            using (var stream = file.OpenReadStream())
            using (var imageStream = System.IO.File.Create(resultPath))
            {
                var bytes = stream.GetAllBytes();
                imageStream.Write(bytes);
            }

            return resultPath;
        }
    }
}