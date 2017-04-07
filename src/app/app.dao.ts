import {Response} from "@angular/http";
import {Observable} from "rxjs";
export class Dao{


  constructor() {
    let location = window.location.href;

    if(/localhost/.test(location)){
      this.base = 'http://localhost:8080'
    }else{
      this.base = "";
    }
  }

  protected base : string =  'http://localhost:8080';

  protected extractData(res: Response) {
    let body = res.json();
    return body || { };
  }
}
