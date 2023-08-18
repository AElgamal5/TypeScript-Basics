/*
 * Literal types in TypeScript
 */

type status = "Active" | "Inactive";

let myStatus: status = "Active";
// myStatus = "lol"; // error -> must be "Active" or "Inactive"

type compareResult = 0 | 1 | -1;

//compare function must return 0 or 1 or -1
function compare(num1: number, num2: number): compareResult {
  if (num1 === num2) return 0;
  if (num1 > num2) return 1;
  return -1;
}

console.log(compare(20, 20)); //output: 0
console.log(compare(30, 20)); //output: 1
console.log(compare(10, 20)); //output: -1
