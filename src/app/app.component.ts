import {Component, OnInit} from '@angular/core';
import {OauthService} from "./services/oauth/oauth.service";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    if(this.activatedRoute.routeConfig != "redirectComponent" && !this.oauth.isLoggedIn()){
      this.router.navigate(["login"]);
    }
  }


  constructor(private activatedRoute: ActivatedRoute, private oauth : OauthService, private router : Router) {

  }
}
