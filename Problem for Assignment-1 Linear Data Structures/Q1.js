//Q1. Write a program to find all pairs of an integer array whose sum is equal to a given number?

const input = [1, 2, 4, 5, 2, 6, 8, 8, 10, 10, 10, 2],
  target = 7;
let result = [];
for (let i of [...new Set(input)]) {
  if (i <= target) {
    if (input.includes(target - i)) {
      result.push([i, target - i]);
    }
  }
}

console.log(result);