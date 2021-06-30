import { Injectable } from '@angular/core';
import {Observable, of, throwError as observableThrowError} from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Endpoints} from "../constants/endpoints";
import {ComplimentModel} from "../models/compliment.model";

@Injectable({
  providedIn: 'root'
})
export class ComplimentService {

  constructor(private http: HttpClient,private endpoints: Endpoints) {
  }

  public getCompliment() : Observable<ComplimentModel>{
    const url = this.endpoints.getComplimentUrl();

    return this.http
      .get<ComplimentModel>(url);
  }

}
