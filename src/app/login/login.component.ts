import { Component, OnInit } from '@angular/core';

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
      "https://sequencing.com/oauth2/authorize?redirect_uri=http://localhost:4200/redirect&response_type=code&state=CA&client_id=kalieki&scope=[]";
  }

}
