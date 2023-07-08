import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class TagService {
  apiUrlmain = 'https://api.waifu.im/search?many=true&included_tags='

   httpOptions = {
    headers: new HttpHeaders({

    })
  };
  constructor(private http: HttpClient, route: ActivatedRoute) {

  }

  getTag(tag: string){
    return this.http.get<any>(this.apiUrlmain + tag, this.httpOptions)
  }
}
