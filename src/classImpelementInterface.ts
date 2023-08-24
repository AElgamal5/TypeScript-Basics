/**
 * Class impalements form Interface
 */

interface WebSettings {
  theme: boolean;
  font?: string;
  save: () => void;
}

class UserSettings implements WebSettings {
  private _logs: boolean = false;
  constructor(public userName: string, public theme: boolean) {}

  public save(): void {
    console.log("saved");
  }

  public get logs(): boolean {
    return this._logs;
  }

  public set logs(logs: boolean) {
    this._logs = logs;
  }
}

let userSettings1 = new UserSettings("Elgamal", false);
console.log(userSettings1.userName);
console.log(userSettings1.theme);
console.log(userSettings1.logs);
userSettings1.logs = true;
console.log(userSettings1.logs);
