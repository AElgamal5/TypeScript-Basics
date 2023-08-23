/*
 * Interface in TS
 * 1- Serve Like Types
 * 2- The Interface Describes The Shape Of An Object
 * 3- It Defines The Syntax To Follow
 *
 * work with objects and functions
 * use readonly and optional
 */

interface User {
  //use readonly to prevent manipulation in props
  readonly id: number;
  name: string;
  state: boolean;
  //use '?' to make optional props
  op?: number;
}

let user1: User = { id: 123, name: "user1", state: false };

// user1.id = 456; //error -> can't change readonly prop

console.log(user1);

console.log("-".repeat(20));

function getData(data: User): void {
  console.log(data.id);
  console.log(data.name);
  console.log(data.state);
}
getData(user1);
