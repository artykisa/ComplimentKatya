import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class Endpoints{
  public getComplimentUrl(): string{
    return endpoints.compliment;
  }
}

const endpoints = {
  compliment: environment.complimentUrl
}

