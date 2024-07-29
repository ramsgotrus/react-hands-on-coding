// Pre-defined test arrays
const testArray1 = [1, 2, 3, 4, 5];
const testArray2 = [2, -3, 4, 7, -1, 0];
const testArray3 = [1, 3, 2];
const testArray4 = [2, 4, 6, 1, 5];

// Question 1: Are there any 4s in the list?
function hasFour(arr: number[]): boolean {
  return arr.includes(4);
  // Implement your solution here
  /*To determine whether the number 4 is present in a given array of numbers, 
  you can use JavaScript's built-in array methods. In this case, the .includes() 
  method is particularly useful because it checks if a specified element exists in the array.*/
}

console.log("Q1 - testArray1 has 4:", hasFour(testArray1));
console.log("Q1 - testArray2 has 4:", hasFour(testArray2));

// Question 2: Are they all positive?
function allPositive(arr: number[]): boolean {
  // Implement your solution here
  return arr.every((num) => num > 0);

  /* To determine whether all elements in an array are positive numbers, 
  you can use JavaScript’s array method .every(). 
  This method tests whether all elements in the array pass a test implemented by the provided function. */
}

console.log("Q2 - testArray1 all positive:", allPositive(testArray1));
console.log("Q2 - testArray2 all positive:", allPositive(testArray2));

// Question 3: Convert the input array into a running total array
// In: [1, 3, 2], Out: [1, 4, 6]

function runningSumTotal(arr: number[]): number[] {
  const result: number[] = [];
  let cumulativeSum = 0;

  for (const num of arr) {
    cumulativeSum += num;
    result.push(cumulativeSum);
  }

  return result;
}

function runningTotal(arr: number[]): number[] {
  // Implement your solution here
  return arr.reduce((acc, curr) => {
    const newTotal = (acc.length > 0 ? acc[acc.length - 1] : 0) + curr;
    return [...acc, newTotal];
  }, [] as number[]);

  /*To convert an input array into a running total (or cumulative sum) array,
   you need to compute the sum of elements from the start of the array up to the current position.
    This involves iterating through the array and maintaining a running sum that gets updated with each element. */
}

console.log("Q3 - Running total of testArray3:", runningTotal(testArray3));

// Question 4: Find the missing number in a unsorted array of sequential numbers
// In: [2,4,6,1,5], Out: 3
function findMissingNumber(arr: number[]): number {
  // Implement your solution here
  const n = arr.length + 1;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = arr.reduce((sum, num) => sum + num, 0);
  return expectedSum - actualSum;

  /*You can use the formula for the sum of an arithmetic series to find the missing number. For a sequence of numbers from 1 to n, the sum is given by:*/
}

console.log("Q4 - Find missing number in data:", findMissingNumber(testArray4));
