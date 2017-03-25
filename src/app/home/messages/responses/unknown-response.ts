import {Response} from "../response";

export class UnknownResponse extends Response{

  constructor() {
    super();
    this.acceptableResponses.push("I'm sorry, I cannot help you with that.  Please start over");
  }
}
