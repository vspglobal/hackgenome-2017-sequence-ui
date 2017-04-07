import {Injectable} from '@angular/core';
import {Dao} from "../app.dao";
import {Http} from "@angular/http";

@Injectable()
export class ListDaoService extends Dao {

  path : string =  "/list";

  constructor(private http : Http) {
    super();
  }

  fetch() {
    return this.http.get(this.base + this.path).map(this.extractData)
  }

  add(item: string) {
    return this.http.post(this.base + this.path, {name : item}).map(this.extractData);
  }
}
