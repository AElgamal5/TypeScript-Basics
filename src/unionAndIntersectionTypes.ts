/*
 * Union And Intersection Types used to make new types using exist ones
 */

type A = {
  one: number;
  two: string;
};

type B = { three: boolean };

//create new type using data in A or B
type C = A | B;

let CVar: C = { one: 1, two: "2" };
CVar = { three: false };

//create new type using data in A and B
type D = A & B;
let DVar: D = { one: 1, two: "2", three: true };
