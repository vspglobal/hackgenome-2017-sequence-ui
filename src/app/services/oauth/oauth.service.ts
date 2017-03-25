import { Injectable } from '@angular/core';

@Injectable()
export class OauthService {

  loggedIn : boolean = false;

  constructor() { }

  isLoggedIn() {
    return this.loggedIn;
  }
}
