import { Injectable } from '@angular/core';
import {Dao} from "../app.dao";
import {Http} from "@angular/http";

@Injectable()
export class SuggestDaoService extends Dao{

  private path : string = '/suggest';

  constructor(private http : Http) {  super(); }

  init() {
    return this.http.get(this.base + this.path).map(this.extractData)
  }
}
