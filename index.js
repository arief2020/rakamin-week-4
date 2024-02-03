// function for min, max, total, average array
const calculate = (array) => {
  let formCalculate = {
    total: 0,
    average: 0,
  };
  for (let index = 0; index < array.length; index++) {
    if (array[index] > formCalculate.max || !formCalculate.max) {
      formCalculate.max = array[index];
    }
    if (array[index] < formCalculate.min || !formCalculate.min) {
      formCalculate.min = array[index];
    }
    formCalculate.total += array[index];
  }
  formCalculate.average = formCalculate.total / array.length;
  return formCalculate;
};
// function for comparison data
const comparison = (odd, even, nameComparison) => {
  if (odd === even) {
    return `${odd} == ${even}, ${nameComparison} of odd array equal with ${nameComparison} of even array`;
  } else if (odd >= even) {
    return `${odd} >= ${even}, ${nameComparison} of odd array greater than ${nameComparison} of even array`;
  } else {
    return `${odd} <= ${even}, ${nameComparison} of odd array less than ${nameComparison} of even array`;
  }
};
// make 100 data in array with value in range 1 - 50
const array = Array.from(
  { length: 100 },
  () => Math.floor(Math.random() * 50) + 1
);
console.log("array");
console.log(array);
console.log(`array length: ${array.length}`);
let oddArray = [];
let evenArray = [];

// split array to odd array and even array based on index of array
for (let index = 0; index < array.length; index++) {
  index % 2 == 0 ? evenArray.push(array[index]) : oddArray.push(array[index]);
}
console.log("array of odd index (odd array): ");
console.log(oddArray);
console.log(`odd array length: ${oddArray.length}`);

// calculate value of odd array
const calculateOddArray = calculate(oddArray);
const maxOddArray = calculateOddArray.max;
const minOddArray = calculateOddArray.min;
const totalOddArray = calculateOddArray.total;
const averageOddArray = calculateOddArray.average;

console.log(`max of odd array = ${maxOddArray}`);
console.log(`min of odd array = ${minOddArray}`);
console.log(`total of odd array = ${totalOddArray}`);
console.log(`average of odd array = ${averageOddArray}`);

console.log("array of even index (even array): ");
console.log(evenArray);
console.log(`even array length: ${evenArray.length}`);

// calculate value of even array
const calculateEvenArray = calculate(evenArray);
const maxEvenArray = calculateEvenArray.max;
const minEvenArray = calculateEvenArray.min;
const totalEvenArray = calculateEvenArray.total;
const averageEvenArray = calculateEvenArray.average;

console.log(`max of even array = ${maxEvenArray}`);
console.log(`min of even array = ${minEvenArray}`);
console.log(`total of even array = ${totalEvenArray}`);
console.log(`average of even array = ${averageEvenArray}`);

// comparison between odd array and even array
const comparisonOfMax = comparison(maxOddArray, maxEvenArray, "maximum");
const comparisonOfMin = comparison(minOddArray, minEvenArray, "minimum");
const comparisonOfTotal = comparison(totalOddArray, totalEvenArray, "total");
const comparisonOfAverage = comparison(
  averageOddArray,
  averageEvenArray,
  "average"
);

console.log(comparisonOfMax);
console.log(comparisonOfMin);
console.log(comparisonOfTotal);
console.log(comparisonOfAverage);
