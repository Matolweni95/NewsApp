import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewsapiService } from '../service/newsapi.service';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  btns:any[] = [
    { value: 'technology' , value2: 'Technology'},
    { value: 'business' , value2: 'Business'},
    { value: 'sports' , value2: 'Sports'},
    { value: 'entertainment' , value2: 'Entertainment'},
  
   
  ];

  test:any;
  message: any;
  messageval:any;
  general:any = localStorage.setItem('home', 'general');
  genholder:any = localStorage.getItem('home')
  tempvalue:any;
  holder:any;

  value(id:string) { 
    this.data.category = id;
  }

  constructor(private data: NewsapiService) { 
    
  }

  ngOnInit() {
    
    // this.data.catagory = this.genholder;
  }

}


