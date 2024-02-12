const { randomArrayElement } = require("../exporting-modules/practiceExports");

function randomFromArray(arr){
  //Your code here to select a random element from the array passed to the function.
  let randomElement = Math.floor(Math.random()*arr.length);
  return arr[randomElement];
}
// let animals = ["cat", "dog", "fish", "ferret", "bird"]
// console.log(randomFromArray(animals));

//TODO: Export the randomFromArray function.

module.exports = randomFromArray; 