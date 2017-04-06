import { Injectable } from '@angular/core';

@Injectable()
export class OauthService {

  private loggedIn: boolean = false;
  private _code: string;

  constructor() {
  }

  isLoggedIn() {
    return this.loggedIn;
  }

  setCode(code: string) {
    if (code != null && code.length > 0) {
      this.loggedIn = true;
      this._code = code;
    }
  }


  get code(): string {
    return this._code;
  }

  set code(value: string) {
    this._code = value;
  }
}
