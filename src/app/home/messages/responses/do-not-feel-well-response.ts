import {Response} from "../response";
export class DoNotFeelWellResponse extends Response{


  constructor() {
    super();
    this.regex = /(.*(am|do).*not.*feel(ing)?.*(well|good))|(.*sick.*)|(.*am.*unwell.*)/;
    this.acceptableResponses =[
      'I am sorry to hear that, what is wrong?',
      'What symptoms are you showing?',
       'Let me see if I can figure out what is wrong, tell me some more info',
    ]
  }
}
