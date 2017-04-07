import { Component, OnInit } from '@angular/core';
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  loginWithSequence(){
    window.location.href =
      "https://sequencing.com/oauth2/authorize?redirect_uri="+ environment.redirect_uri + "&response_type=code&state=WA&client_id=" + environment.client_id + "&scope=demo";
  }

}
