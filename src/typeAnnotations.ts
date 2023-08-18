/*
 * Type Annotation || Signature
 * we use type annotation to force type checking
 * Type Annotation is not mandatory
 * type "any" accept any datatype
 */

//--------------------------------------------------------------------//
//By default complier indicate datatype of assigned variable if not give
let x = "ABC"; // x: string
// x = 5; //error -> x accepts only string

//The same with numbers
let num = 5; // num: number
num = 6; //accepted
// num = "Hi"; //error -> not accepted

//the created variable with no value or type, By default will be with type any
//and will accept any type
let all; //all: any
all = "ABC";
all = 123;
all = true;
//--------------------------------------------------------------------//
//string
let s: string = "ABC";
s = "DEF";
// s = 456; //error

//boolean
let state: boolean = false;
state = true;

//number
let num1: number;

//number or string
let numOrString: number | string;
numOrString = 5;
numOrString = "LOL";
// numOrString = false; //error

//array of numbers
let arr: number[] = [1, 3, 5];
//array of strings
let arr2: string[] = ["A", "K", "M"];
//or
let arr3: Array<string> = ["A", "K", "M"];
//array of booleans
let arr4: boolean[] = [true, false];
//array numbers or strings or booleans
let arr5: (string | boolean | number)[] = [true, 1, "WASD"];
//multi-dimensional array
let arr6: number[][] = [[2, 4, 6], [3]];
//array mix -> numbers or strings or array of boolean
let arr7: (number | string | boolean[])[] = [1, "a", [false, true]];

//create new type
type Species = "cat" | "dog" | "bird";
let animal: Species = "cat";
// animal = "Camel"; //error

//tuple -> fixed array size with known types
let tuple: [number, string, boolean, number | string];
tuple = [1, "ahmed", false, 5];

//Enum -> A type to name a set of numeric values:
enum Day {
  Saturday,
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
}
let bestDay: Day = Day.Friday;
console.log("bestDay", bestDay); //output: bestDay 6
//Set a default starting number:
enum TenPlus {
  Ten = 10,
  Eleven,
  Twelve,
}
let numOf12: TenPlus = TenPlus.Twelve;
console.log("numOf12", numOf12); //output: numOf12 12
//manual assigned values
enum MyOddSet {
  Three = 3,
  Five = 5,
  Seven = 7,
  Nine = 9,
}

let odd: MyOddSet = MyOddSet.Five;
console.log("odd", odd); //output: odd 5
console.log(MyOddSet.Five); //output:  5

//const Enum -> enumeration mapped to numbers
// A const Enum is the same as a normal Enum. Except that no Object is generated at compile time. Instead, the literal
// values are substituted where the const Enum is used.
const enum NinjaActivity {
  Espionage,
  Sabotage,
  Assassination,
}
console.log(NinjaActivity.Espionage); //output: 0
console.log(NinjaActivity["Sabotage"]); //output: 1
console.log(NinjaActivity.Assassination); //output: 2
