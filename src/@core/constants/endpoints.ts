import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class Endpoints{
  public getComplimentUrl(): string{
    return endpoints.compliment;
  }
  public getCatPictureUrl(): string{
    return endpoints.catPicture;
  }
}

const endpoints = {
  compliment: environment.complimentUrl,
  catPicture: environment.catUrl
}

