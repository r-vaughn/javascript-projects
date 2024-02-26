//Arrays can hold different data types, even other arrays! A multi-dimensional array is one with entries that are themselves arrays.

//1) Define and initialize the arrays specified in the exercise to hold the name, chemical symbol and mass for different elements.

let element1 = ['hydrogen', 'H', 1.008]
let element2 = ['helium', 'He', 4.003]
let element26 = ['iron', 'Fe', 55.85]

//2) Define the array 'table', and use 'push' to add each of the element arrays to it. Print 'table' to see its structure.

let table = []

table.push(element1);
table.push(element2);
table.push(element26);

//console.log(table);

//3) Use bracket notation to examine the difference between printing 'table' with one index vs. two indices (table[][]).

//console.log(table[1]);
//console.log(table[1][1]);

//4) Using bracket notation and the table array, print the mass of element1, the name for element 2 and the symbol for element26.

//console.log(table[0][2]);
//console.log(table[1][0]);
//console.log(table[2][1]);

//5) 'table' is an example of a 2-dimensional array. The first “level” contains the element arrays, and the second level holds the name/symbol/mass values. Experiment! Create a 3-dimensional array and print out one entry from each level in the array.

let row0 = [ 'hydrogen', 'H', 1.008 ];
let row1 = [ 'helium', 'He', 4.003 ];
let row2 = [ 'iron', 'Fe', 55.85];
let sheet0 = [];
let sheet1 = [];
let sheet2 = [];

let book0 = []

sheet0.push(row0);
sheet1.push(row1);
sheet2.push(row2);

book0.push(sheet0);
book0.push(sheet1);
book0.push(sheet2);

console.log(book0)
console.log(book0[2][0][2]);
console.log(book0[0][0][1]);
console.log(book0[1][0][0]);

//let phrase = 'Code for fun'
//console.log(phrase[2]);

//let phrase = "JavaScript rocks!";
//console.log(phrase[phrase.length - 8]);

//let language = "JavaScript";
//console.log(language.slice(1,6));

//const classes = ["science, computer, art"];
//const teachers = ["Jones", "Willoughby", "Rhodes"];

//console.log(classes.length);
//console.log(teachers.length);

myStr = 'Index'

console.log(myStr[2] ==='n');
console.log(myStr[4] ==='x');
console.log(myStr[6] ===' ');
console.log(myStr[0] ==='I');