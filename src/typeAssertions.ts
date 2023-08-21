/*
 * Type assertions data type
 * use 'as' keyword
 * we tell the compile the data type
 * and the compile not performing any checks to the type
 */

//tell the complier the type to get the correct methods and props of the interface
const img = document.getElementById("img") as HTMLImageElement;
console.log(img.src);

const img2 = <HTMLImageElement>document.getElementById("img2");
console.log(img2.src);
// console.log(img.value); //error images does not have a value

//to prove there is data type check when using assertion

let _1000: any = 1000;
console.log((_1000 as string).length); //error
