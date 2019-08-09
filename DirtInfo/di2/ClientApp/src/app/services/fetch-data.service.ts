import { Injectable } from '@angular/core';


@Injectable()
export class FetchTopDataService{
    getTopRebbates(){
        console.log("from getTopRebbates() in FetchTopDataSevice");
        return [
            {
                id:1,
                title:"first",
                content:"bla bla bla bla bla bla",
                imgPath:"https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/08/07/16/sherrod-brown-nan-whaley-donald-trump.jpg"
            },
            {
                id:2,
                title:"first",
                content:"bla bla bla bla bla bla",
                imgPath:"https://www.geek.com/wp-content/uploads/2010/06/Dmitry-Medvedev-and-Steve-Jobs-hold-iPhone-4-550x352.jpg"
            },
            {
                id:3,
                title:"first",
                content:"bla bla bla bla bla bla",
                imgPath:"https://rossoautomobili.com//wp-content/uploads/2018/05/ferrari-collection.jpg"
            },
            {
                id:4,
                title:"first",
                content:"bla bla bla bla bla bla",
                imgPath:"https://www.geek.com/wp-content/uploads/2010/06/Dmitry-Medvedev-and-Steve-Jobs-hold-iPhone-4-550x352.jpg"
            },
            {
                id:5,
                title:"first",
                content:"bla bla bla bla bla bla",
                imgPath:"https://www.geek.com/wp-content/uploads/2010/06/Dmitry-Medvedev-and-Steve-Jobs-hold-iPhone-4-550x352.jpg"
            },
        ];
    };
}