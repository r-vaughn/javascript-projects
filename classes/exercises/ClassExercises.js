// Define your Book class here:

class Book {
    constructor(title, author, copyrightDate, iSBN, numberOfPages, numberOfCheckOuts, discarded) {
        this.title = title;
        this.author = author; 
        this.copyrightDate = copyrightDate; 
        this.iSBN = iSBN; 
        this.numberOfPages = numberOfPages; 
        this.numberOfCheckOuts = numberOfCheckOuts; 
        this.discarded = discarded;
    }
    checkout(uses = 1) {
        this.numberOfCheckOuts += uses;
    }
}

// Define your Manual and Novel classes here:

class Manual extends Book {
    constructor (title, author, copyrightDate, iSBN, numberOfPages, numberOfCheckOuts, discarded) {
        super(title, author, copyrightDate, iSBN, numberOfPages, numberOfCheckOuts, discarded);
    }
    dispose(currentYear) {
        if (currentYear - this.copyrightDate > 5) {
            this.discarded = 'Yes';
        }
    }
}

class Novel extends Book {
    constructor (title, author, copyrightDate, iSBN, numberOfPages, numberOfCheckOuts, discarded) {
        super(title, author, copyrightDate, iSBN, numberOfPages, numberOfCheckOuts, discarded); 
    }
    updateCheckOuts(number) {
        this.numberOfCheckOuts += number;
    }
}

// Declare the objects for exercises 2 and 3 here:

let prideAndPrejudice = new Novel('Pride and Prejudice', 'Jane Austen', 1813, '1111111111111', 432, 32, 'No');

let howToBuildAShuttle = new Manual('Top Secret Shuttle Building Manual', 'Redacted', 2013, '0000000000000', 1147, 1, 'No');


// console.log(prideAndPrejudice);
// console.log(howToBuildAShuttle);


// Code exercises 4 & 5 here:

howToBuildAShuttle.dispose(2024);
console.log(howToBuildAShuttle);

prideAndPrejudice.updateCheckOuts(5); 
console.log(prideAndPrejudice);


