import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TagsService {
  apiUrl = 'https://api.waifu.im/tags'

  constructor(private http: HttpClient) { }

  getTags(){
    return this.http.get(this.apiUrl)
  }
}
