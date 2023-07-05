import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";

interface Waifu {
  images: [{
    url: string;
    image_id: number
  }]
}
@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.sass']
})
export class PreviewComponent {
  url: string | undefined = ``;
  id: string | null = ''
  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')
    const promise = this.http.get<Waifu>(`https://api.waifu.im/search?included_files=${this.id}`)
    promise.subscribe(data => {
      try {
        this.url = data?.images[0].url
        console.log(data)
      }catch (e){
        console.log('Error')
      }
    })
  }
}
