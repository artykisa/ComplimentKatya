import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComplimentComponent } from './compliment/compliment.component';
import {HttpClientModule} from "@angular/common/http";
import {ComplimentService} from "../@core/services/compliment.service";
import { CatPictureComponent } from './cat-picture/cat-picture.component';
import { IWantYouComponent } from './i-want-you/i-want-you.component';
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    ComplimentComponent,
    CatPictureComponent,
    IWantYouComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [
    ComplimentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
