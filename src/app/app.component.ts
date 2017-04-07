import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {OauthService} from "./services/oauth/oauth.service";
import {Router, ActivatedRoute} from "@angular/router";
import {Http, Response} from "@angular/http";
import 'rxjs/Rx';
import {ToastsManager, ToastContainer} from "ng2-toastr";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {

    if(this.getParameterByName("code")){
      let code = this.getParameterByName("code");


      this.http.get("http://localhost:8080/user?code=" + code + "&state=" + this.getParameterByName("state")).map(this.extract).subscribe(success => {
        this.oauth.setCode(success);
        this.router.navigate(["home"]);
        this.toastr.success("Logged In", "Successfully Logged In Through Sequence");
      }, err => {
        console.log(err);
      })
    }else if(!this.oauth.isLoggedIn()){
  //    this.router.navigate(["login"]);
    }
  }

  constructor(private activatedRoute: ActivatedRoute, private oauth : OauthService, private router : Router, private http : Http, private toastr : ToastsManager, private vcr : ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  getParameterByName(name) {

    let url = window.location.href;

  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

extract(data){
    return data._body;
}
}
