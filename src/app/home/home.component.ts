import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {HeaderComponent} from "../header/header.component";
import {ListServiceService} from "../list-service.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router : Router, private listService : ListServiceService) {
    HeaderComponent.enableBack = false;
  }

  ngOnInit() {
    this.listService.initList();
  }

  goTo(str : string){
    HeaderComponent.enableBack = true;
    this.router.navigate([str]);
  }

}
