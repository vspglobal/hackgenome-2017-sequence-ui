export class Response {

  regex: RegExp;
  acceptableResponses: string[] = [];
  children: Response[];
  action: (string) => void;
  private _resets: boolean = true;


  public applies(str: string): boolean {
    return this.regex.test(str);
  }

  public getMessage(): string {
    let maximum = this.acceptableResponses.length - 1;
    let minimum = 0;

    let index = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

    return this.acceptableResponses[index];
  }


  get resets(): boolean {
    return this._resets;
  }

  set resets(val: boolean) {
    this._resets = val;
  }
}
