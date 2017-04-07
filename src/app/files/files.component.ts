import {Component, OnInit} from '@angular/core';
import {FileDaoService} from "./file-dao.service";
import {ToastsManager} from "ng2-toastr";
import {Router} from "@angular/router";

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})
export class FilesComponent implements OnInit {

  private files: {name: string, id: string, selected: boolean}[] = [];

  constructor(private fileDao: FileDaoService, private toast: ToastsManager, private router: Router) {
    this.initDao();
  }

  ngOnInit() {
  }

  selectFile(file) {
    this.fileDao.selectFile(file.id).subscribe(success => {
      this.router.navigate(['home']);
    }, err => {
      this.toast.error(err, "Error");
    })
  }

  initDao() {
    this.fileDao.getFiles().subscribe(success => {
      this.files = success;
      this.toast.success("Files Retrieved", "Success")
    }, err => {
      this.toast.error(err, "Error")
    });
  }

}
