import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})
export class FilesComponent implements OnInit {

  private file : {name : string, id : string, selected : boolean}[] = [];

  constructor() { }

  ngOnInit() {
  }

  selectFile(file){

  }

}
