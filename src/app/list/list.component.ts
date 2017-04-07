import {Component, OnInit} from '@angular/core';
import {ListDaoService} from "./list-dao.service";
import {ToastsManager} from "ng2-toastr";
import {Router} from "@angular/router";
import {ListServiceService} from "../list-service.service";

@Component({
  selector: 'app-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.scss']
})
export class ListComponent implements OnInit {


  itemToAdd = "";


  constructor(private listService : ListServiceService) {
  }

  ngOnInit() {
  }





}
