import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComplimentComponent } from './compliment/compliment.component';
import {HttpClientModule} from "@angular/common/http";
import {ComplimentService} from "../@core/services/compliment.service";
import { CatPictureComponent } from './cat-picture/cat-picture.component';

@NgModule({
  declarations: [
    AppComponent,
    ComplimentComponent,
    CatPictureComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    ComplimentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
