import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {PreviewComponent} from "./preview/preview.component";
import {TopBlockComponent} from "./main/top-block/top-block.component";
import {TagsPageComponent} from "./tags-page/tags-page.component";
import {TagPageComponent} from "./tag-page/tag-page.component";

const routes: Routes = [
  {
    path: '',
    component: TopBlockComponent,
    data: {animation: 'Home'},
  },
  {
    path: 'preview/:id',
    component: PreviewComponent,
    data: {animation: 'Article'},
  },
  {
    path: 'tags',
    component: TagsPageComponent,
    data: {animation: 'Article'}
  },
  {
    path: 'tag',
    component: TagPageComponent,
    data: {animation: 'Home'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
