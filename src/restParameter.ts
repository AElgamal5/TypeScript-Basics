/*
 * Rest parameters in TS allow you to pass a variable number of arguments to a function as an array.
 * accept unknown number of params
 *
 *
 */

//make function to add all given numbers
function addAll(...nums: number[]) {
  let result = 0;

  nums.forEach((num) => {
    result += num;
  });

  return result;
}

console.log(addAll(1, 2, 3)); //output: 6
