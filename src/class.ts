/**
 * Type annotation with class
 *
 * 'msg' function => property
 * 'sayHi' function => method
 */

class UserAccount {
  name: string;
  age: number;
  msg: () => string;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    this.msg = function () {
      return `${this.name}|${this.age}`;
    };
  }

  sayHi(): string {
    return `Hi from ${this.name}`;
  }
}

let userObj = new UserAccount("Ahemd", 23);

console.log(userObj.name);
console.log(userObj.age);
console.log(userObj.msg());
console.log(userObj.sayHi());
