const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.

let pigLatin = str.slice(3) + str.slice(0, 3); 
console.log(pigLatin);

//Use a template literal to print the original and modified string in a descriptive phrase.

console.log(`You can transform ${str} into pig Latin - ${pigLatin} - using slice methods.`);

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.

let strN = input.question("How many letters would you like to be relocated? ");

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.

if (strN > str.length) {
    console.log((`${strN} is greater than the length of ${str}. Will default to 3.`));
    console.log((str.slice(3) + str.slice(0, 3)));
} else {
    console.log(str.slice(strN) + str.slice(0, strN));
}