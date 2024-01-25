console.log("\nmakeLine: ");

function makeLine(size) {
   let line = '';
   for (let i = 0; i < size; i++) {
       line += '#';
   }
   return line;
}

console.log(makeLine(5));



console.log("\nmakeSquare: ");

function makeSquare(size) {
    let square = makeLine(size);
    for (let i = 1; i < size; i++) {
        square += `\n${makeLine(size)}`;
    }
    return square;
}

console.log(makeSquare(5));



console.log("\nmakeRectangle: ");

function makeRectangle(width, height) {
    let rectangle = makeLine(width);
    for (let i = 1; i < height; i++) {
         rectangle += `\n${makeLine(width)}`;    
    }
    return rectangle  
}

console.log(makeRectangle(5, 2));



console.log("\nmakeDownwardStairs: ");

function makeDownwardStairs(height) {
    let stairs = makeLine(1);
    for (let i = 1; i < height; i++) {
        stairs += `\n${makeLine(i+1)}`;
    }
    return stairs;
}

console.log(makeDownwardStairs(5));



console.log("\nmakeSpaceLine: "); 

function makeSpaceLine(numSpaces, numChars) {
    let spaceLine = '';
    for (let i = 0; i < numChars; i++) {
        spaceLine = makeLine(numSpaces).replaceAll("#", " ") + makeLine(numChars) + makeLine(numSpaces).replaceAll("#", " ");
    }
    return spaceLine;
}

console.log(makeSpaceLine(3, 5)); 



console.log("\nmakeIsoscelesTriangle: ");

function makeIsoscelesTriangle(height) {
    let isoscelesTriangle = makeSpaceLine(height-1, 1); 
    for (let i = 1; i < height; i++) {
        isoscelesTriangle += `\n${makeSpaceLine((height-i-1), (2*i + 1))}`; 
    }
    return isoscelesTriangle; 
}

console.log(makeIsoscelesTriangle(5)); 



console.log("\nmakeDiamond: ");

function makeDiamond(height) {
    for (let i = 0; i < height; i++) {
        let reverseTriangle = makeIsoscelesTriangle(height).split('');
        let reverseCharTriangle = reverseTriangle.reverse();
        diamond = makeIsoscelesTriangle(height) + `\n${reverseCharTriangle.join('')}`; 
    }
    return diamond
}

console.log(makeDiamond(5));
