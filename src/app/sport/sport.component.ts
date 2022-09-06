import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../service/newsapi.service'
@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.css']
})
export class SportComponent implements OnInit {

  constructor(private _services:NewsapiService) { }

  DisplaySport:any = [];

  ngOnInit(): void {
    this._services.contents().subscribe((result)=> {
      console.log(result);
      this.DisplaySport = result.articles;
    })

  }

}
