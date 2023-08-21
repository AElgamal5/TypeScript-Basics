/*
 * Data Types Tuple
 * Is Another Sort Of Array Type
 * We knows Exactly How Many Elements It Contains
 * We Knows Which Types It Contains At Specific Positions
 */

// article has id, title and status
let article: [number, string, boolean] = [123, "title1", false];
// let article2: [number, string, boolean] = [123, "title1", false, 1]; //error

console.log(article[0]); //output: 123
console.log(article[1]); //output: "title"
console.log(article[2]); //output: false
// console.log(article[3]); //error

article.push(1);
console.log(article); //output: [ 123, 'title1', false, 1 ]
//to prevent editing in tuple make it readonly

let article2: readonly [number, string, boolean] = [456, "title2", true];
// article2.push(1); //error

//using destruction with tuples
const [id, title, articleState] = article2;
console.log(id); //output: 456
console.log(title); //output: 'title2'
console.log(articleState); //output: true
