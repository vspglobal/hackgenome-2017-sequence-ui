export class Message {

  private _val : string;
  private _who : string;


  constructor(val: string, who: string) {
    this._val = val;
    this._who = who;
  }


  get val(): string {
    return this._val;
  }

  set val(value: string) {
    this._val = value;
  }

  get who(): string {
    return this._who;
  }

  set who(value: string) {
    this._who = value;
  }
}
