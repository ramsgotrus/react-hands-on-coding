// Pre-defined test arrays
const testArray1 = [1, 2, 3, 4, 5];
const testArray2 = [2, -3, 4, 7, -1, 0];
const testArray3 = [1, 3, 2];
const testArray4 = [2, 4, 6, 1, 5];

// Question 1: Are there any 4s in the list?
function hasFour(arr: number[]): boolean {
  return arr.includes(4);
  // Implement your solution here
}

// Question 2: Are they all positive?
function hasAllPositive(arr: number[]): boolean {
  return arr.every((item) => item > 0);
}
//console.log(hasAllPositive(testArray2))

// Question 3: Convert the input array into a running total array
// In: [1, 3, 2], Out: [1, 4, 6]

function convertRunningTotal(arr: number[]): number[] {
  return arr.reduce((acc, curr) => {
    const newTotal = (arr.length > 0 ? acc[acc.length - 1] : 0) + curr;
    return [...acc, newTotal];
  }, [] as number[]);
}

// Question 3: Convert the input array into a running total array
// In: [1, 3, 2], Out: [1, 4, 6]
function runningTotal(arr: number[]): number[] {
  return arr.reduce((acc, curr) => {
    const newTotal = (acc.length > 0 ? acc[acc.length - 1] : 0) + curr;
    return [...acc, newTotal];
  }, [] as number[]);
}

// In: [2,4,6,1,5], Out: 3
function findMissingNumber(arr: number[]): number {
  // Implement your solution here
  const n = arr.length + 1;
  const expectedSum = (n * (n + 1)) / 2;

  const actualSum = arr.reduce((sum, num) => sum + num, 0);
  console.log("n", n, "expected", expectedSum, "act", actualSum);
  return expectedSum - actualSum;
}

console.log("Q3 - Running total of testArray3:", findMissingNumber(testArray3));
