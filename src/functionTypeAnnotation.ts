/*
 * Function type annotation
 * noImplicitAny -> Enable error reporting for expressions and declarations with an implied 'any' type
 *
 * noImplicitReturns -> Enable error reporting for codepaths that do not explicitly return in a function
 *
 * noUnusedLocals -> Enable error reporting when local variables aren't read
 *
 * noUnusedParameters -> like 'noUnusedLocals' but for params
 */

//error on name and age because they implied by any
//if we make "noImplicitAny: false" then no error will be occurred
function fun1(name, age) {
  return `Hi ${name}, your age is ${age}`;
}

//parameters with types
function fun2(name: string, age: number) {
  return `Hi ${name}, your age is ${age}`;
}

//if "noImplicitReturns" is true -> to make sure that the function return a value in all cases
let mood: boolean = true;
// function fun3(name: string, age: number) {
//   if (mood) {
//     return `Hi ${name}, your age is ${age}`;
//   }
// }

//we need to add return in else
function fun3(name: string, age: number) {
  if (mood) {
    return `Hi, your ${name}, your age is ${age}`;
  } else {
    return `Hi`;
  }
}

//if "noUnusedLocals" so will be error if no unused local variables
function fun4(name: string, age: number) {
  //   let x: any = 5; //we need to use it to remove the error
  if (mood) {
    return `Hi, your ${name}, your age is ${age}`;
  } else {
    return `Hi`;
  }
}

//if "noUnusedParameters" so will be error if no unused params like salary
// function fun5(name: string, age: number, salary: number) {
//   //   let x: any = 5; //we need to use it to remove the error
//   if (mood) {
//     return `Hi, your ${name}, your age is ${age}`;
//   } else {
//     return `Hi`;
//   }
// }

//to make function return certain type
// function (........): string
function fun6(name: string, age: number): string {
  //   let x: any = 5; //we need to use it to remove the error
  if (mood) {
    return `Hi, your ${name}, your age is ${age}`;
  } else {
    // return 123; //error must return string
    return `Hi`;
  }
}
