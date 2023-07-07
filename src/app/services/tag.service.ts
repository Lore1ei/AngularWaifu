import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class TagService {

  apiUrlmain = 'https://api.waifu.im/search?many=true&'

  constructor(private http: HttpClient, route: ActivatedRoute) {

  }

  getTag(tag: string){
    return this.http.get<any>(this.apiUrlmain + tag)
  }
}
