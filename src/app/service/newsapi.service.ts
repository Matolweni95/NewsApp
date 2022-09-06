import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ContentComponent } from '../content/content.component'
import { BusinessComponent } from '../business/business.component';
@Injectable({
  providedIn: 'root'
})
export class NewsapiService {
  refresh: any;

  constructor( private _http:HttpClient) { }
  
  base = environment.baseUrl;

  category: any;
  
  content():Observable<any>{
  
    return this._http.get(this.base + `&category=sports`)
  }

  contents():Observable<any>{
  
    return this._http.get(this.base + `&category=${this.category}`)
  }

  
  public getRefresh(): Observable<boolean> {

    return this.refresh.asObservable();
 }
}
