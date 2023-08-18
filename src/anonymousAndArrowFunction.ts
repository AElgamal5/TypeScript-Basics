/*
 * Anonymous And Arrow Function
 */

//Anonymous function
const add = function (num1: number, num2: number): number {
  return num1 + num2;
};

console.log(add(3, 5));

//Arrow function

const add2 = (num1: number, num2: number): number => {
  return num1 + num2;
};

console.log(add2(3, 5));
//or

const add3 = (num1: number, num2: number): number => num1 + num2;
console.log(add3(3, 5));
