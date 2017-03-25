import { Component, OnInit } from '@angular/core';
import {Message} from "./messages/message";
import {Event} from "_debugger";
import {Responder} from "./messages/responder";
import {Symptoms} from "./messages/symptoms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private messages : Message[] = [];
  private messageInput : string;

  constructor() { }

  ngOnInit() {
    Responder.init();
  }

  public addMessage(str : string){
    this.messages.push(new Message(str, 'me'));
}

public addReply(str : string){
    this.messages.push(new Message(str, "bot"));
}

public checkEnter(event){
    if(event.keyCode === 13){
        this.addMessage(this.messageInput);
        this.addReply(Responder.reply(this.messageInput));
        this.messageInput = '';
    }
}

public getSymptoms(){
  return Symptoms.symptoms;
}

}
