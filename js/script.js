"use strict";

const numbers = [9, 6, 1, 2, 4, 10, 15, 7, 3, 8, 0];
const sortedNumbers = console.log(sort(numbers));

function sort(numbers) {
  const items = [];
  let index = 0;

  for (const number of numbers) {
    if (number[index] === index) {
      index++;
      console.log("+");
    } else {
      items[number] = number;
    }
  }

  return items;
}

// I'm still thinking about it.
// I know that this option is not correct and there are many vulnerabilities in it.
// This is because I am not allowed to pry
// :-D
