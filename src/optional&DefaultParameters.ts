/*
 * Optional and Default Parameters
 *
 * in JS all parameters is optional and will be 'undefined' if not given
 *
 * in TS all parameters is required by default
 *
 * In TS use '?' to make the parameter optional
 */

function showDate(name: string, age: number, country: string): string {
  return `${name} - ${age} - ${country}`;
}
// console.log(showDate("Ahmed")); //error -> require 3 args
console.log(showDate("Ahmed", 23, "EG")); //output: Ahmed - 23 - EG

//To add default value in TS must came after required params
function showDate2(
  age: number,
  country: string,
  name: string = "noName"
): string {
  return `${name} - ${age} - ${country}`;
}

console.log(showDate2(23, "EG")); //output: noName - 23 - EG

//To make optional parameter in TS add '?' after param name and must be after required params
function showDate3(name: string, country: string, age?: number): string {
  return `${name} - ${age} - ${country}`;
}
console.log(showDate3("Ahmed", "EG")); //output: Ahmed - undefined - EG
