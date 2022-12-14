import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../service/newsapi.service'
@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  constructor(private _services:NewsapiService) { }
  //Display section
  
  DisplayBusiness:any = [];

  ngOnInit(): void {
    this._services.contents().subscribe((result)=> {
      console.log(result);
      this.DisplayBusiness = result.articles;
    })

  }

}
