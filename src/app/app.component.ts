import { Component } from '@angular/core';
import {OauthService} from "./services/oauth/oauth.service";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  constructor(private activatedRoute: ActivatedRoute, private oauth : OauthService, private router : Router) {
    if(this.activatedRoute.component != "redirectComponent" && !oauth.isLoggedIn()){
      router.navigate(["login"]);
    }
  }
}
