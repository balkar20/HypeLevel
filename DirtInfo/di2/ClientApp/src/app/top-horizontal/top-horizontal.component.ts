import { Component, OnInit } from '@angular/core';
import { FetchTopDataService } from '../services/fetch-data.service';
import { NewsRebate } from '../models/NewsRebate';
import {BrowserModule, DomSanitizer} from '@angular/platform-browser'

@Component({
  selector: 'top-horizontal',
  templateUrl: './top-horizontal.component.html',
  styleUrls: ['./top-horizontal.component.css']
})
export class TopHorizontalComponent implements OnInit {
  newsRebates: NewsRebate[];

  currentStyles: {};
  selected: NewsRebate;

  constructor(public fetchService: FetchTopDataService, private sanitizer:DomSanitizer) {
     
  }

  
  ngOnInit(): void {
    this.newsRebates = this.fetchService.getTopRebbates();
  }

  trackByItems(index: number, item: NewsRebate): number { return item.id; }

  setLinkStyle(id:number) :any{
    // console.log(id);
    // console.log(this.newsRebates.find(item => item.id == id).id);
    // console.log(id == this.newsRebates.find(item => item.id == id).id);
    // console.log("-----------------------------------------");
    // console.log(`Now i lo you path: ${this.newsRebates.find(item => item.id == id).imgPath}`)
    var obj: NewsRebate = this.newsRebates.find(item => item.id == id) as NewsRebate;
    var url : number = obj.id;
    console.log(`imagepath is : ${url}`);
    // return this.sanitizer.bypassSecurityTrustStyle(`url(${url})`);
    let path = "https://cs8.pikabu.ru/avatars/2169/x2169459-1857383472.png"
    return {

      'background-image': `url(\'${path}\')`,
      'display': 'block',
      'color': '#337ab7',
      'background-size': 'cover',
      'width': '100%',
      'height': '100%',
      'position': 'relative',
    }
  }
}

