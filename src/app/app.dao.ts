import {Response} from "@angular/http";
import {Observable} from "rxjs";
export class Dao{
  protected base : string =  'http://localhost:8080';

  protected extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }
}
