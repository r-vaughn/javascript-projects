// Code your orbitCircumference function here:

function  orbitCircumference(radius) {
    let circumference = 2*Math.PI*radius
    return Math.round(circumference);
}
console.log(orbitCircumference(6));
console.log(orbitCircumference(4));

// Code your missionDuration function here:

//const orbitalRadius = 2000
//const orbitalSpeed = 28000

function missionDuration(orbitsCompleted, orbitalRadius = 2000, orbitalSpeed = 28000) {
  let totalDistance = orbitsCompleted * orbitCircumference(orbitalRadius);  
  let time = Math.round((totalDistance/orbitalSpeed) * 100) / 100; 
  return (`The mission will travel ${totalDistance} km around the planet, and it will take ${time} hours to complete.`);
}

console.log(missionDuration(5)  + "\n");

// Copy/paste your selectRandomEntry function here:

function selectRandomEntry(idNumbers) {
  let randomEntryIndex = Math.floor(Math.random()*idNumbers.length); 
  return idNumbers[randomEntryIndex];
}

// Code your oxygenExpended function here:

//function oxygenExpended(candidateObject, orbitsCompleted, orbitalRadius, orbitalSpeed) {
//  let totalTime = missionDuration(orbitsCompleted, orbitalRadius, orbitalSpeed); 
//  let oxygenUsed = Math.round(candidateObject.o2Used(totalTime) * 1000) / 1000; 
//  return `${candidateObject['name']} will perform the spacewalk, which will last ${totalTime} hours and require ${oxygenUsed} kg of oxygen.`; 
//}
//
//console.log(oxygenExpended(candidateA, 5, 2000, 28000));
//console.log(oxygenExpended(candidateB, 5, 2000, 28000));
//console.log(oxygenExpended(candidateC, 5, 2000, 28000));
//console.log(oxygenExpended(candidateD, 5, 2000, 28000));
//console.log(oxygenExpended(candidateE, 5, 2000, 28000));
//console.log(oxygenExpended(candidateF, 5, 2000, 28000));

// Candidate data & crew array.
let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
 let crew = [candidateA,candidateC,candidateE];
 
 function oxygenExpended(candidateObject, orbitsCompleted, orbitalRadius, orbitalSpeed) {
  let totalTime = missionDuration(orbitsCompleted, orbitalRadius, orbitalSpeed); 
  let oxygenUsed = Math.round(candidateObject.o2Used(totalTime) * 1000) / 1000; 
  return `${candidateObject['name']} will perform the spacewalk, which will last ${totalTime} hours and require ${oxygenUsed} kg of oxygen.`; 
}

console.log(oxygenExpended(candidateA, 3, 2000, 28000) + "\n");
//console.log(oxygenExpended(candidateB) + "\n");
//console.log(oxygenExpended(candidateC) + "\n");
//console.log(oxygenExpended(candidateE) + "\n");
//console.log(oxygenExpended(candidateF) + "\n");
//console.log(oxygenExpended(candidateD) + "\n");