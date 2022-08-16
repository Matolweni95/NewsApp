import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewsapiService {

  constructor( private _http:HttpClient) { }

  newApiUrl = "https://newsapi.org/v2/top-headlines?country=za&sortBy=publishedAt&apiKey=cfe1a5ae77f24bb283a94d475125065b"

  content():Observable<any>{
    return this._http.get(this.newApiUrl)
  }
}
