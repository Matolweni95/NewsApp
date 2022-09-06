import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../service/newsapi.service'
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private _services:NewsapiService) { }

  //Display section

  
  DisplayContent:any = [];

  ngOnInit(): void {
    this._services.content().subscribe((result)=> {
      console.log(result);
      this.DisplayContent = result.articles;
    })

  }

}
