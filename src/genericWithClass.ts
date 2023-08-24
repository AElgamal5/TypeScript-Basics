/*
  Generics
  - Classes
*/

//default value 'string'
class Test<T = string> {
  constructor(public value: T) {}
  show(msg: T): void {
    console.log(`${msg} - ${this.value}`);
  }
}

let test1 = new Test<string>("ElGamal");
console.log(test1.value);
test1.show("Message");

let test2 = new Test<number | string>(100);
console.log(test2.value);
test2.show("Message");
