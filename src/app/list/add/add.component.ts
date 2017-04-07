import { Component, OnInit } from '@angular/core';
import {ListDaoService} from "../list-dao.service";
import {ToastsManager} from "ng2-toastr";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  item : string = "";

  constructor(private dao : ListDaoService, private toast : ToastsManager, private router : Router) { }

  ngOnInit() {
  }

  getItems(){
    return [];
  }

  add(){
    this.dao.add(this.item).subscribe(success =>{
        this.toast.success(this.item + " added", "Success");
        this.item = '';
        this.router.navigate(['list']);
    }, err =>{
        this.toast.error(err, "Error");
    });
  }

}
