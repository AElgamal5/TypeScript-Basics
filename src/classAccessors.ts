/**
 * Class Get And Set Accessors
 */

class Persona {
  constructor(private _NID: number, public name: string, public age: number) {}

  sayMyName(): string {
    return `my name is${this.name}`;
  }

  get NID(): number {
    return this._NID;
  }

  //should not return any thing
  set NID(num: number) {
    this._NID = num;
  }
}

let person1 = new Persona(123, "Ahmed", 23);

console.log(person1.name);
console.log(person1.age);
console.log(person1.NID);
console.log(person1.sayMyName());
person1.NID = 456;
console.log(person1.NID);
