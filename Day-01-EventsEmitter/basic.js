// write a function to convert number  0-9 in words:
// Using array
const toWords = (number) => {
  const numWords = [
    "Zero",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
  ];
  return numWords[number];
};

console.log(toWords(9));

// Using Switch statement
const toWords2 = (number) => {
  switch (number) {
    case 0:
      return "Zero";
    case 1:
      return "One";
    case 2:
      return "Two";
    case 3:
      return "Three";
    case 4:
      return "Four";
    case 5:
      return "Five";
    case 6:
      return "Six";
    case 7:
      return "Seven";
    case 8:
      return "Eight";
    case 9:
      return "Nine";

    default:
      return "Number must from 0-9";
  }
};

console.log(toWords2(5));

// Write a function using arrow function to change number in thier words form
// example - 38492 = Three Eight Four Nine Two

// Using function toWords2
const numberToWords = (number) => {
  // create a number array
  const numberArr = String(number).split("");
  let inWords = "";
  numberArr.forEach((element) => {
    inWords += `${toWords2(Number(element))} `;
  });
  return inWords;
};

console.log(numberToWords(2025));

// Now Using toWords();
const numberToWords2 = (number) => {
  // create a number array
  const numberArr = String(number).split("");
  let inWords = "";
  numberArr.forEach((element) => {
    inWords += `${toWords(Number(element))} `;
  });
  return inWords;
};

console.log(numberToWords(2503201000125));

