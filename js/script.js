"use strict";

const numbers = [9, 6, 1, 2, 4, 10, 15, 7, 3, 8, 0];
console.log(isSorted(numbers));

function isSorted(numbers) {
  for (let firstIndex = 0; firstIndex <= numbers.length; firstIndex++) {
    for (
      let secondIndex = firstIndex + 1;
      secondIndex <= numbers.length - 1;
      secondIndex++
    ) {
      if (numbers[firstIndex] < numbers[secondIndex]) {
        continue;
      } else {
        return false;
      }
    }

    return true;
  }
}
