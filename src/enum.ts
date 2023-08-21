/*
 * Enums data type
 * allow us to declare a set of named constants or collection of related values
 * types:
 * 1- numeric enums
 * 2- string-based enums
 * 3- heterogenous (string + number)
 *
 * 'preserveConstEnums' Disable erasing 'const enum' declarations in generated code.
 *
 * enum can refer to another enum
 * enum can refer to the same enum
 * enum can have calculations
 * enum can have functions
 *
 * best practice: start the enum name and its content with uppercase letter
 */

// for example game modes:
const kidMode = 15;
const easyMode = 10;
const midMode = 5;
const hardMode = 2;

//by default start from 0
enum mode {
  kid,
  easy,
  mid,
  hard,
}
console.log(mode.kid); //output: 0
console.log(mode.easy); //output: 1
console.log(mode.mid); //output: 2
console.log(mode.hard); //output: 3

console.log("-".repeat(20));

//we can choose the start of the enum
enum mode2 {
  kid = 15,
  easy,
  mid,
  hard,
}
console.log(mode2.kid); //output: 15
console.log(mode2.easy); //output: 16
console.log(mode2.mid); //output: 17
console.log(mode2.hard); //output: 18

console.log("-".repeat(20));

//we can choose each value of the enum
enum mode3 {
  kid = 15,
  easy = 10,
  mid = 5,
  hard = 2,
}
console.log(mode3.kid); //output: 15
console.log(mode3.easy); //output: 16
console.log(mode3.mid); //output: 17
console.log(mode3.hard); //output: 18

console.log("-".repeat(20));

//use enum inside other one
enum KidAge {
  _lt10 = 30,
  _10 = 20,
  _gt10 = 15,
}
enum mode4 {
  kid = KidAge._10,
  easy = 10,
  mid = 5,
  hard = 2,
}

console.log(mode4.kid); //output: 20

console.log("-".repeat(20));

//use enum inside itself
//allow only using values form start to end and not vice versa
//thats mean we could use 'easy' in 'mid' or in 'hard'
enum mode5 {
  kid = KidAge._10,
  easy = 10,
  mid = easy,
  hard = easy - 8, //calculation
}

console.log(mode5.mid); //output: 10
console.log(mode5.hard); //output: 2

console.log("-".repeat(20));

//use function in enum
function getHardLevel(): number {
  return 2;
}

enum mode6 {
  kid = KidAge._10,
  easy = 10,
  mid = easy,
  hard = getHardLevel(),
}

console.log(mode6.hard); //output: 2
