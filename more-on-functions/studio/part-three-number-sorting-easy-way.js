//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

//Sort each array in ascending order.

ascendingNums1 = nums1.sort(function(a,b){return a-b});
console.log(ascendingNums1);

ascendingNums2 = nums2.sort(function(a,b){return a-b});
console.log(ascendingNums2);

ascendingNums3 = nums3.sort(function(a,b){return a-b});
console.log(ascendingNums3);



//Sort each array in decending order.

descendingNums1 = nums1.sort(function(a,b){return b-a});
console.log(descendingNums1);

descendingNums2 = nums2.sort(function(a,b){return b-a});
console.log(descendingNums2);

descendingNums3 = nums3.sort(function(a,b){return b-a});
console.log(descendingNums3);
