import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

interface Waifu {
  images: [{
    url: string;
    image_id: number
  }]
}


@Component({
  selector: 'app-top-block',
  templateUrl: './top-block.component.html',
  styleUrls: ['./top-block.component.sass']
})
export class TopBlockComponent {
  url: string = 'https://api.waifu.im/search?included_tags=waifu'
  imageId: number | undefined = 0

  constructor(private http: HttpClient) {
  }

  urlImage: string | undefined = ''

  ngOnInit() {
    const promise = this.http.get<Waifu>(this.url)
    promise.subscribe((data) => {
      try {
        this.urlImage = data?.images[0].url
        this.imageId = data?.images[0].image_id
        console.log(data)
      }catch (e){
        console.log('Error')
      }
    })
  }
}
