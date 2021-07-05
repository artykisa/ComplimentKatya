import { Injectable } from '@angular/core';
import {Observable, of, throwError as observableThrowError} from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Endpoints} from "../constants/endpoints";
import {ComplimentModel} from "../models/compliment.model";
import {CatPictureModel} from "../models/cat-picture.model";

@Injectable({
  providedIn: 'root'
})
export class CatPictureService {

  constructor(private http: HttpClient,private endpoints: Endpoints) {
  }

  public getCatPicture() : Observable<CatPictureModel>{
    const url = this.endpoints.getCatPictureUrl();

    return this.http
      .get<CatPictureModel>(url);
  }

}
