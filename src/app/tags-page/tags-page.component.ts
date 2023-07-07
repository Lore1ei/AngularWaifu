import {Component, HostListener} from '@angular/core';
import { TagsService } from "../services/tags.service";
import {  Router } from '@angular/router';

@Component({
  selector: 'app-tags-page',
  templateUrl: './tags-page.component.html',
  styleUrls: ['./tags-page.component.sass']
})
export class TagsPageComponent {
  data: {} = {};
  accordionToggle: string = '';
  getScreenHeight: any = 0
  constructor(private tagsService: TagsService, private router: Router) {
  }

  openAccordion(e: Event){
    if(this.accordionToggle == (e.target as HTMLInputElement).innerText){
      return this.accordionToggle = '';
    }
    return this.accordionToggle = (e.target as HTMLInputElement).innerText
  }

  movetoContact(e: Event){
    return this.router.navigate(['/tag'],{queryParams: {search: (e.target as HTMLInputElement).innerText}})
  }

  ngOnInit(){
    this.data = this.tagsService.getTags().subscribe(data => {
      this.data = data
      console.log(this.data)
    })
    this.getScreenHeight = window.innerHeight - 200;
  }
  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenHeight = window.innerHeight - 200;
  }
}
