import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
  inputs:['color', 'icon', 'text']
})
export class BadgeComponent implements OnInit {

  text : string;
  icon : string;
  color : string;

  constructor() { }

  ngOnInit() {
  }

}
