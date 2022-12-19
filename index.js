var finances = [
  ['Jan-2010', 867884],
  ['Feb-2010', 984655],
  ['Mar-2010', 322013],
  ['Apr-2010', -69417],
  ['May-2010', 310503],
  ['Jun-2010', 522857],
  ['Jul-2010', 1033096],
  ['Aug-2010', 604885],
  ['Sep-2010', -216386],
  ['Oct-2010', 477532],
  ['Nov-2010', 893810],
  ['Dec-2010', -80353],
  ['Jan-2011', 779806],
  ['Feb-2011', -335203],
  ['Mar-2011', 697845],
  ['Apr-2011', 793163],
  ['May-2011', 485070],
  ['Jun-2011', 584122],
  ['Jul-2011', 62729],
  ['Aug-2011', 668179],
  ['Sep-2011', 899906],
  ['Oct-2011', 834719],
  ['Nov-2011', 132003],
  ['Dec-2011', 309978],
  ['Jan-2012', -755566],
  ['Feb-2012', 1170593],
  ['Mar-2012', 252788],
  ['Apr-2012', 1151518],
  ['May-2012', 817256],
  ['Jun-2012', 570757],
  ['Jul-2012', 506702],
  ['Aug-2012', -1022534],
  ['Sep-2012', 475062],
  ['Oct-2012', 779976],
  ['Nov-2012', 144175],
  ['Dec-2012', 542494],
  ['Jan-2013', 359333],
  ['Feb-2013', 321469],
  ['Mar-2013', 67780],
  ['Apr-2013', 471435],
  ['May-2013', 565603],
  ['Jun-2013', 872480],
  ['Jul-2013', 789480],
  ['Aug-2013', 999942],
  ['Sep-2013', -1196225],
  ['Oct-2013', 268997],
  ['Nov-2013', -687986],
  ['Dec-2013', 1150461],
  ['Jan-2014', 682458],
  ['Feb-2014', 617856],
  ['Mar-2014', 824098],
  ['Apr-2014', 581943],
  ['May-2014', 132864],
  ['Jun-2014', 448062],
  ['Jul-2014', 689161],
  ['Aug-2014', 800701],
  ['Sep-2014', 1166643],
  ['Oct-2014', 947333],
  ['Nov-2014', 578668],
  ['Dec-2014', 988505],
  ['Jan-2015', 1139715],
  ['Feb-2015', 1029471],
  ['Mar-2015', 687533],
  ['Apr-2015', -524626],
  ['May-2015', 158620],
  ['Jun-2015', 87795],
  ['Jul-2015', 423389],
  ['Aug-2015', 840723],
  ['Sep-2015', 568529],
  ['Oct-2015', 332067],
  ['Nov-2015', 989499],
  ['Dec-2015', 778237],
  ['Jan-2016', 650000],
  ['Feb-2016', -1100387],
  ['Mar-2016', -174946],
  ['Apr-2016', 757143],
  ['May-2016', 445709],
  ['Jun-2016', 712961],
  ['Jul-2016', -1163797],
  ['Aug-2016', 569899],
  ['Sep-2016', 768450],
  ['Oct-2016', 102685],
  ['Nov-2016', 795914],
  ['Dec-2016', 60988],
  ['Jan-2017', 138230],
  ['Feb-2017', 671099]
];

// HEADER
// This prints report's header into console.

console.log("Financial Analysis \n----------------------------");

// TOTAL MONTHS
//This prints the number of months in the data set to the console.

console.log("Total Months: " + finances.length);

// TOTAL PROFITS
// This flattens the finances array and creates a new var flatFinances. I decided it's easier to find specific
// values in a flat array vs a nested array. I'm yet to learn how to efficiently extract data from nested arrays.

flatFinances = finances.flat();

// This creates a var onlyNumbers with just the numbers from the flatFinances var, which makes searching for numbers easier.

var onlyNumbers = flatFinances.filter(
  element => typeof element === 'number'
);

// This sums up all elements of array onlyNumbers to calculate total profits.

var totalProfit = onlyNumbers.reduce(function (a, b) {
  return a + b;
}, 0);

// This prints the total sum of numbers in onlyNumbers array to console.

console.log("Total: $" + totalProfit);

// AVERAGE CHANGE

//STEP 1: Calculating changes over time by subtracting consecutive elements of onlyNumbers array 
// and placing them in a new var allChanges.

function diff(arr) {
  diffArr = [];
  for (var i = 0; i < arr.length - 1; i++) {
    diffArr.push(arr[i + 1] - arr[i]);
  }
  return diffArr;
}
var allChanges = (diff(onlyNumbers));

// STEP 2: Adding up all the changes and adding to var allChangesSum.

var allChangesSum = allChanges.reduce(function (a, b) {
  return a + b;
}, 0);

// STEP 3: Dividing allChangesSum by number of changes and printing results to console, up to second decimal place.

var averageChange = allChangesSum / (finances.length - 1);

console.log("Average Change: $" + Math.round(100 * averageChange) / 100)

// GREATEST INCREASE

// This locates the biggest number in allChanges array and assigns it to maxProfitIncrease var.

var maxProfitIncrease = allChanges.reduce((a, b) =>
  Math.max(a, b), -Infinity);

// This locates the index of array holding maxProfitIncrease in allChanges and assigns it to new var maxProfitIncreaseIndex.

var maxProfitIncreaseIndex = allChanges.indexOf(maxProfitIncrease);

// This locates the index of the array nested in fiances, relating to the maxProfitIncrease, 
// and assigns it to maxIncreaseMonthAndAmount var.

var maxIncreaseMonthAndAmount = finances[(maxProfitIncreaseIndex + 1)];

// This prints the greatest increase in profits month and amount to console.

console.log("Greatest Increase in Profits: " + maxIncreaseMonthAndAmount[0] + " " + "($" + maxProfitIncrease + ")")

// GREATEST DECREASE - repeat steps from GREATEST INCREASE

var maxProfitDecrease = allChanges.reduce((a, b) =>
  Math.min(a, b),);
var maxProfitDecreaseIndex = allChanges.indexOf(maxProfitDecrease);
var maxDecreaseMonthAndAmount = finances[(maxProfitDecreaseIndex + 1)];

console.log("Greatest Decrease in Profits: " + maxDecreaseMonthAndAmount[0] + " " + "($" + maxProfitDecrease + ")")