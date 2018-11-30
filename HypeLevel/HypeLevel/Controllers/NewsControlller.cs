using System.Collections.Generic;
using System.Linq;
using HypeLevel.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace HypeLevel.Controllers
{
    [Route("api/[controller]")]
    public class NewsController : Controller
    {
        private static News[] News = new[]
        {
            new News{Name = "hi", Id = 1, Data = "koliujh"},
            new News{Name = "Lol", Id = 2, Data = "Lpoi"},
            new News{Name = "Mand", Id = 3, Data = "niuy"},
            new News{Name = "hi", Id = 4, Data = "koliujh"},
            new News{Name = "Lol", Id = 5, Data = "Lpoi"},
            new News{Name = "Mand", Id = 6, Data = "niuy"},
            new News{Name = "hi", Id = 1, Data = "koliujh"},
            new News{Name = "Lol", Id = 2, Data = "Lpoi"},
            new News{Name = "Mand", Id = 3, Data = "niuy"},
            new News{Name = "hi", Id = 4, Data = "koliujh"},
            new News{Name = "Lol", Id = 5, Data = "Lpoi"},
            new News{Name = "Mand", Id = 6, Data = "niuy"},
            new News{Name = "hi", Id = 1, Data = "koliujh"},
            new News{Name = "Lol", Id = 2, Data = "Lpoi"},
            new News{Name = "Mand", Id = 3, Data = "niuy"},
            new News{Name = "hi", Id = 4, Data = "koliujh"},
            new News{Name = "Lol", Id = 5, Data = "Lpoi"},
            new News{Name = "Mand", Id = 6, Data = "niuy"},
            new News{Name = "hi", Id = 1, Data = "koliujh"},
            new News{Name = "Lol", Id = 2, Data = "Lpoi"},
            new News{Name = "Mand", Id = 3, Data = "niuy"},
            new News{Name = "hi", Id = 4, Data = "koliujh"},
            new News{Name = "Lol", Id = 5, Data = "Lpoi"},
            new News{Name = "Mand", Id = 6, Data = "niuy"},

        };

        [HttpGet("[action]")]
        public IEnumerable<News> GetNews(int id)
        {
            return News;
        }

        
    }
}