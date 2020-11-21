"use strict";

const numbers = [9, 6, 1, 2, 4, 10, -3, 15, 7, 3, 8, 0];
console.log(sort(numbers));

function sort(numbers) {
  for (let firstIndex = 0; firstIndex <= numbers.length; firstIndex++) {
    for (
      let secondIndex = firstIndex + 1;
      secondIndex <= numbers.length - 1;
      secondIndex++
    ) {
      if (numbers[firstIndex] > numbers[secondIndex]) {
        [numbers[firstIndex], numbers[secondIndex]] = [
          numbers[secondIndex],
          numbers[firstIndex],
        ];
      }
    }
  }

  return numbers;
}

// I did not understand how to use 2 functions in this task
