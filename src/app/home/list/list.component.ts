import { Component, OnInit } from '@angular/core';
import {ListDaoService} from "./list-dao.service";
import {ToastsManager} from "ng2-toastr";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  list : {item : string}[] = [];

  constructor(private listDao : ListDaoService, private toast : ToastsManager) {
    listDao.fetch().subscribe(success => {
      this.toast.success("Retrieved Current Shopping List", "Success");
    }, err => {
      this.toast.error(err, "Error");

    })
  }

  ngOnInit() {
  }

}
