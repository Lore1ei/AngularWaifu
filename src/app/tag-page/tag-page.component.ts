import { Component } from '@angular/core';
import {TagService} from "../services/tag.service";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-tag-page',
  templateUrl: './tag-page.component.html',
  styleUrls: ['./tag-page.component.sass']
})
export class TagPageComponent {
  data: any = {};
  constructor(private tagService: TagService, private route: ActivatedRoute) {
    console.log(this.route.snapshot.queryParams['search']);
  }

  ngOnInit() {
    this.tagService.getTag(this.route.snapshot.queryParams['search']).subscribe(elements => {
      console.log("Elements: ", elements); // print out the elements object
      return this.data = elements
    });
  }

}
