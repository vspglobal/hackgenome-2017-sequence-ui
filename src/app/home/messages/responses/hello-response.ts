import {Response} from "../response";
export class HelloResponse extends Response{


  constructor() {
    super();
    this.regex = /[Hh]e(([llo])|(ey)).*/;
    this.acceptableResponses = [
      'Hello, how may I help you today?',
      'Hey, I am here to help',
      'Hello, what can I help you with?',
      'Hey, how are you feeling today?'
    ]
  }
}
