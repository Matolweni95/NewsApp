import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../service/newsapi.service'
@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {

  constructor(private _services:NewsapiService) { }
  //Display section
  
  DisplayTech:any = [];

  ngOnInit(): void {
    this._services.contents().subscribe((result)=> {
      console.log(result);
      this.DisplayTech = result.articles;
    })

  }


}
