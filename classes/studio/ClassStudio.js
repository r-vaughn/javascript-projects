//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.

class CrewCandidate {
    constructor(name, mass, scores) {
        this.name = name; 
        this.mass = mass; //kg
        this.scores = scores;
    }
    addScore(newScore) {
        this.scores.push(newScore);    
        return this.scores
    }
    average() {
        let total = 0;
        for (let i = 0; i < this.scores.length; i++) {
            total += this.scores[i];            
        }
        return (Math.round((total / this.scores.length)*10))/10
    }
    status() {
        let candidateAvg = this.average();
        if (candidateAvg >= 90) {
            return `${this.name} earned an average test score of ${this.average()} and has a status of 'Accepted'.`
        } else if (candidateAvg >= 80) {
            return `${this.name} earned an average test score of ${this.average()} and has a status of 'Reserve'.`
        } else if (candidateAvg >= 70) {
            return `${this.name} earned an average test score of ${this.average()} and has a status of 'Probationary'.`
        } else if (candidateAvg < 70) {
            return `${this.name} earned an average test score of ${this.average()} and has a status of 'Rejected'.`
        }
    }
}

let bubbaBear = new CrewCandidate("Bubba Bear", 135, [88, 85, 90]);

let merryMaltese = new CrewCandidate("Merry Maltese", 1.5, [93, 88, 97]);

let gladGator = new CrewCandidate("Glad Gator", 225, [75, 78, 62]);

// console.log(bubbaBear);
// console.log(merryMaltese);
// console.log(gladGator); 

console.log(bubbaBear.status());
console.log(merryMaltese.status());
console.log(gladGator.status());

//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.

// bubbaBear.addScore(83);
// console.log(bubbaBear);

// console.log(merryMaltese.average());

//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.