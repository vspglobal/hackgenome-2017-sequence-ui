import {Response} from "@angular/http";
import {Observable} from "rxjs";
import {environment} from "../environments/environment";
export class Dao{


  constructor() {
    this.base = environment.base;
  }

  protected base : string;

  protected extractData(res: Response) {
    let body = res.json();
    return body || { };
  }
}
