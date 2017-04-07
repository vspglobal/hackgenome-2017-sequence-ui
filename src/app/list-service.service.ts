import { Injectable } from '@angular/core';
import {ListDaoService} from "./list/list-dao.service";
import {ToastsManager} from "ng2-toastr";

@Injectable()
export class ListServiceService {
  private _list : {}[];
  private _loading : boolean;
  constructor(private listDao : ListDaoService, private toast : ToastsManager) { }


  get list(): {}[] {
    return this._list;
  }

  set list(value: {}[]) {
    this._list = value;
  }

  get loading(): boolean {
    return this._loading;
  }

  set loading(value: boolean) {
    this._loading = value;
  }

  public initList() {
    this.loading = true;

    this.listDao.fetch().subscribe(success => {
      this.list = success;
      this.loading = false;
    }, err => {
      this.toast.error(err, "Error");
      this.loading = false;

    })
  }

  addItem(itemToAdd) {

    this.listDao.add(itemToAdd).subscribe(success => {
      this.toast.success(itemToAdd + " added", "Success");
      this.initList();
    }, err => {
      this.toast.error(err, "Error");
    });
  }
}
