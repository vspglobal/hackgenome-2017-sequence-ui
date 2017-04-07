import { Component, OnInit } from '@angular/core';
import {FileDaoService} from "./file-dao.service";
import {ToastsManager} from "ng2-toastr";

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})
export class FilesComponent implements OnInit {

  private files : {name : string, id : string, selected : boolean}[] = [];

  constructor(private fileDao : FileDaoService, private toast : ToastsManager) {
    this.initDao();
  }

  ngOnInit() {
  }

  selectFile(file){
    this.fileDao.selectFile(file.id).subscribe(success =>{
      for(let f of this.files){
        f.selected = false;
      }
      file.selected = true;
    },err =>{
      this.toast.error(err, "Error");
    })
  }

  initDao(){
    this.fileDao.getFiles().subscribe(success =>{
      this.files =success;
      this.toast.success("Files Retrieved", "Success")
    },err =>{
      this.toast.error(err, "Error")
    });
  }

}
