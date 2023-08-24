/**
 * Generics multiple types
 */

function multipleTypes<T, S>(valueOne: T, valueTwo: S): string {
  return `The First Value Is ${valueOne} And Second Value ${valueTwo}`;
}

console.log(multipleTypes<string, number>("Ahmed", 100));
console.log(multipleTypes<string, boolean>("ElGamal", true));
