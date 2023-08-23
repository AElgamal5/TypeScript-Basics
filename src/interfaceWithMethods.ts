/*
 * Interface with methods and parameters
 */

interface Person {
  id: number;
  name: string;

  //normal function
  sayHello(): string;
  //arrow function
  sayHi: () => string;
  //normal function with param
  getDouble(num: number): number;
}

let prsn1: Person = {
  id: 123,
  name: "Ahmed",

  sayHello() {
    return "Hello";
  },

  sayHi: () => "Hi",

  getDouble(num) {
    return num * 2;
  },
};

console.log(prsn1.id);
console.log(prsn1.name);
console.log(prsn1.sayHello());
console.log(prsn1.sayHi());
console.log(prsn1.getDouble(2));
