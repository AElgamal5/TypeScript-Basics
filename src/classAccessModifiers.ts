/*
 * Class access modifiers and parameters properties
 *
 * 1- public
 * All member in TS is public
 * Can be accessed anywhere without restriction
 *
 * 2- private
 * can only accessed inside the related class only
 *
 * 3- private
 * same like 'private' but can be accessed by deriving class
 *
 *
 * TS is a layer on top JS and all annotations will be removed when compiling
 */

class Car {
  private carType: string;
  protected year: number;
  sound: string;

  constructor(carType: string, year: number, sound: string) {
    this.carType = carType;
    this.year = year;
    this.sound = sound;
  }

  makeSound(num: number): string {
    return (this.sound + " ").repeat(num) + `from ${this.carType}`;
  }
}

let myCar = new Car("BMW", 2020, "BeB");

// console.log(myCar.carType); //error -> can't access a private property outside the class
// console.log(myCar.year); //error -> can't access a protected property outside the class
console.log(myCar.makeSound(3));

//another way
class Car2 {
  constructor(
    private carType: string,
    protected year: number,
    public sound: string,
    public readonly color: string
  ) {}

  makeSound(num: number): string {
    return (this.sound + " ").repeat(num) + `from ${this.carType}`;
  }
}

let myCar2 = new Car2("BMW", 2020, "BeB", "red");

// console.log(myCar2.carType); //error -> can't access a private property outside the class
// console.log(myCar2.year); //error -> can't access a protected property outside the class
console.log(myCar2.color);

// myCar2.color = "green"; //error -> readonly

console.log(myCar2.makeSound(3));
