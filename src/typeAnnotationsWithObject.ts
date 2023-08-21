/*
 * Type Annotations With Object
 */

let myObj: {
  readonly id: number;
  name: string;
  //state is optional
  state?: boolean;
  skills: string[];
} = {
  id: 123,
  name: "Ahmed",
  //   state: true,
  skills: ["HTML", "CSS", "JS"],
};

//id is readonly -> can't change it
// myObj.id = 456; //error
myObj.name = "ElGamal";

console.log(myObj.id);
console.log(myObj.name);
console.log(myObj.state);
console.log(myObj.skills);
