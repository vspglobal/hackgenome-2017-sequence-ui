import { Injectable } from '@angular/core';
import {Dao} from "../app.dao";
import {Http} from "@angular/http";

@Injectable()
export class FileDaoService extends Dao{

  private path : string = '/files';

  constructor(private http : Http) { super(); }

  public getFiles(){
    return this.http.get(this.base + this.path).map(this.extractData);
  }

  selectFile(id) {
    return this.http.post(this.base + this.path, {id:id}).map(this.extractData);

  }
}
