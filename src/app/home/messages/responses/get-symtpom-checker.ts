import {Response} from "../response";
import {Symptoms} from "../symptoms";
export class GetSymtpomChecker extends Response {


  constructor() {
    super();
    this.regex = /.*((cough)|(sore throat)|(stuffy nose)|(rash)|(wheez(ing)?)).*/;
    this.action = str => {
      this.acceptableResponses = [];
      let sym = this.getSymptom(str);
      Symptoms.addSymptom(sym);
      this.acceptableResponses.push('I have noted you have a ' + sym);
    },
      this.resets = false
  }

  private getSymptom(str: any) {
    var matches = this.regex.exec(str);
    return matches[1];
  }
}
