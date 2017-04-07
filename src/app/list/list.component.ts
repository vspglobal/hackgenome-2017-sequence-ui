import { Component, OnInit } from '@angular/core';
import {ListDaoService} from "./list-dao.service";
import {ToastsManager} from "ng2-toastr";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.scss']
})
export class ListComponent implements OnInit {

  list : {name : string}[] = [];
  loading : boolean = true;

  constructor(private listDao : ListDaoService, private toast : ToastsManager, private router : Router) {
    listDao.fetch().subscribe(success => {
      this.toast.success("Retrieved Current Shopping List", "Success");
      this.list = success;
      this.loading = false;
    }, err => {
      this.toast.error(err, "Error");
      this.loading = false;

    })
  }

  ngOnInit() {
  }

  goToAdd(){
    this.router.navigate(['add']);
  }

  deleteItem(){

  }

}
