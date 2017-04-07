import {Component, OnInit} from '@angular/core';
import {ListDaoService} from "./list-dao.service";
import {ToastsManager} from "ng2-toastr";
import {Router} from "@angular/router";
import {ListServiceService} from "../list-service.service";
import {SuggestDaoService} from "./suggest-dao.service";

@Component({
  selector: 'app-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.scss']
})
export class ListComponent implements OnInit {


  itemToAdd = "";
  suggestions = [{message: "Hello World", items:['Hello'], hidden : false}];

  loading : boolean = false;


  constructor(private listService : ListServiceService, private suggestDao : SuggestDaoService) {
    this.loading = true;
    this.suggestDao.init().subscribe(success => {
      this.loading = false;
      this.suggestions = success;
    }, err => {
      this.loading = false;
    });
  }

  ngOnInit() {
  }

  getSuggestions(){
    if(!this.loading && !!this.suggestions){
      let arr = [];
      for(var a = 0; a < this.suggestions.length; a++){
        if(!this.suggestions[a].hidden){
          arr.push(this.suggestions[a])
        }
      }
      return arr;
    }

    return [];
  }





}
