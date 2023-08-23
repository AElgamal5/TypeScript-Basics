/*
 *Interface extend
 */

interface Animal {
  species: string;
  fly: boolean;
}

//'Cat' interface inherit all props of 'Animal'
interface Cat extends Animal {
  sound: string;
}

interface Dog extends Animal {
  name: string;
}

//extend multi-interfaces
interface X extends Animal, Dog, Cat {
  color: string;
}

let myCat: Cat = {
  species: "Egyptian Mau",
  fly: false,
  sound: "Mew Mew 🐈",
};

let myDog: Dog = {
  species: "German",
  fly: false,
  name: "Mo7sen",
};

let unknown: X = {
  species: "X",
  sound: "---",
  fly: true,
  color: "Black",
  name: "X",
};
