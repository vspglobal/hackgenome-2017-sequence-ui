import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {HeaderComponent} from "../header/header.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router : Router) {
    HeaderComponent.enableBack = false;
  }

  ngOnInit() {
  }

  goTo(str : string){
    HeaderComponent.enableBack = true;
    this.router.navigate([str]);
  }

}
