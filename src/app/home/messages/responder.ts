import {Response} from "./response";
import {UnknownResponse} from "./responses/unknown-response";
import {HelloResponse} from "./responses/hello-response";
import {SickEntry} from "./responses/sick-entry";
import {DoNotFeelWellResponse} from "./responses/do-not-feel-well-response";
export class Responder {

  static currentState : Response[] = [] ;
  static defaultState : Response[] = [];
  static unk : Response = new UnknownResponse();

  public static reply(input : string) : string{


    for(let res of this.currentState){
      if(res.applies(input)){
        if(res.children != null){
          this.currentState = res.children;
        }else if(res.resets){
          this.reset();
        }
        if(!!res.action){
          res.action(input);
        }
        return res.getMessage();
      }
    }

    this.reset();
    return this.unk.getMessage();

  }

  public static reset(){
    this.currentState = this.defaultState;
  }

  public static init(){
    this.defaultState = [new HelloResponse(), new DoNotFeelWellResponse()];
    this.defaultState = this.defaultState.concat(SickEntry);
    this.reset();
  }


}
