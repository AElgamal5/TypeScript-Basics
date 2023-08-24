/**
 * Abstract classes and members
 *
 * we can't create instance/object form abstract class
 *
 * Abstract method can't have implementation in the abstract class like 'getCookingTime'
 */

abstract class Food {
  constructor(public title: string, public eaten: boolean) {}

  abstract getCookingTime(): void;
}
// let myFood = new Food("Food", false); //error

class Pizza extends Food {
  constructor(title: string, public kind: string, eaten: boolean) {
    super(title, eaten);
  }

  getCookingTime(): void {
    console.log("Pizza cooking time is 30 min.");
  }
}

class Pasta extends Food {
  constructor(title: string, public kind: string, eaten: boolean) {
    super(title, eaten);
  }

  getCookingTime(): void {
    console.log("Pasta cooking time is 25 min.");
  }
}

let myPizza = new Pizza("Pizza", "MeatLovers", false);

console.log(myPizza.title);
console.log(myPizza.eaten);
console.log(myPizza.kind);
myPizza.getCookingTime();
