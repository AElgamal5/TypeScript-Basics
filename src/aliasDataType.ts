/*
 * Alias data types in TS
 */

//change str as type string
type str = string;

let myName: str = "Ahmed";
myName = "ElGamal";
// myName = 5; //error

//make type accept string and number
type strAndNum = string | number;

let strAndNumVar: strAndNum = "test";
strAndNumVar = 5;
// strAndNumVar = false; //error

type buttons = {
  up: string;
  right: string;
  down: string;
  left: string;
};

let keys: buttons;

keys = { up: "jump", right: "forward", down: "couch", left: "back" };

console.log(keys);

type moveAndFire = buttons & { fire: string };

const moveAndFireKeys: moveAndFire = {
  up: "jump",
  right: "forward",
  down: "couch",
  left: "back",
  fire: "space",
};

//type alias for a function
type mathOP = (num1: number, num2: number) => number;

const addTwoNums: mathOP = (num1, num2) => num1 + num2;
const subTwoNums: mathOP = (num1, num2) => num1 - num2;

console.log(addTwoNums(5, 3));
// console.log(addTwoNums(5, "l")); //error
