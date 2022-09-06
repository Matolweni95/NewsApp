import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../service/newsapi.service'
@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent implements OnInit {

  constructor(private _services:NewsapiService) { }
  //Display section
  
  DisplayEntertainment:any = [];

  ngOnInit(): void {
    this._services.contents().subscribe((result)=> {
      console.log(result);
      this.DisplayEntertainment = result.articles;
    })

  }

}
