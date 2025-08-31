// tell if alpha is vowel or not

// let word = prompt("Enter a letter");

// function vowel(a) {
//   if ("aeiou".includes(a.toLowerCase())) {
//     console.log(a, "is a vowel");
//   } else {
//     console.log(a, "is not a vowel");
//   }
// }

// vowel(word);

// reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("hello"));
// samllest no i an array
let arr = [4, 6, 9, 1, 4];
let small = Math.min(...arr); //this (...) turns array in seprate values
console.log(small);

// Largest no i an array

let large = Math.max(...arr);
console.log(large);

// Genrates random no. multiply with a num like *99 is 0-99

const randomnumber = Math.round(Math.random() * 99);
console.log(randomnumber);

// ADD EVEN NUMS

function sumEvenNumbers(arr) {
  let sum = 0;
  for (let num of arr) {
    if (num % 2 === 0) {
      sum += num;
    }
  }
  return sum;
}

console.log(sumEvenNumbers([13, 22, 53, 24, 15, 56]));

// isPalindrome

function isPalindrome(num) {
  const str = num.toString();
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}

console.log(isPalindrome(252));

// factorial

function factorial(n) {
  if (n < 1) return "♾️";
  let fac = 1;
  for (let i = 2; i <= n; i++) {
    fac *= i;
  }
  return fac;
}

console.log(factorial(5));

// remve duplicates

function unique(arr) {
  return [...new Set(arr)];
}

const num1 = [1, 2, 2, 3, 4, 4, 5];
const num2 = [2, 3, 4, 5, 6, 1, 12, 14, 16];

const nums = num1.concat(num2);

console.log(unique(nums));
