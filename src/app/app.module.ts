import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TopBlockComponent } from './main/top-block/top-block.component';
import {HttpClientModule} from "@angular/common/http";
import { PreviewComponent } from './preview/preview.component';
import { TagsPageComponent } from './tags-page/tags-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TagPageComponent } from './tag-page/tag-page.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopBlockComponent,
    PreviewComponent,
    TagsPageComponent,
    TagPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
