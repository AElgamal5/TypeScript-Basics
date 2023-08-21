/*
 * Data Types
 * Void
  --- Function That Will Return Nothing
  --- Function In JavaScript That Not Return A Value Will Show undefined
  --- undefined is not void
 * Never
  --- Return Type Never Returns
  --- The Function Doesn't Have A Normal Completion
  --- It Throws An Error Or Never Finishes Running At All "Infinite Loop"
 * allowUnreachableCode in tsconfig.json
*/

//this fn. return void means nothing
function logging(msg: string): void {
  console.log(msg);
}

console.log(logging("Hi")); //output: undefined

//or we can use 'return'
function logging2(msg: string): void {
  console.log(msg);
  return;
}
console.log(logging2("Hi")); //output: undefined

const fail = (msg: string): never => {
  throw new Error(msg);
  /**
   * unreachable code
   */
};

//other example of never
function logging3(msg: string): never {
  while (true) {
    console.log(msg);
  }
}
