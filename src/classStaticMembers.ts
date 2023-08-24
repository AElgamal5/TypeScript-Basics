/**
 * Class static members
 *
 * Don't use 'name', 'call' or 'length' for static members
 */

class Human {
  public static created: number = 0;
  public number: number;

  constructor(public name: string) {
    this.number = Human.created;
    Human.created++;
  }

  static getCreated(): number {
    return this.created;
  }
}

console.log(Human.created);

let human1 = new Human("Ahmed");
console.log(human1.name);
console.log(human1.number);
// console.log(human1.created); //error-> static members accessed by class name

console.log(Human.created);

let human2 = new Human("Amir");
console.log(human2.name);
console.log(human2.number);

console.log(Human.created);
