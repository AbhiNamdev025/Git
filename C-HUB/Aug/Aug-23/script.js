const fruits = ["Banana", "Orange", "Apple", "Mango", "Grapes"];
// fruits.shift();
// fruits.unshift("Lemon");
// fruits.push("Kiwi");
console.log(fruits);

const Apple = fruits.includes("Apple");
console.log(" Apple haiii ? ", Apple);
{
  const fruits = ["Banana", "Orange", "Apple", "Mango", "Grapes"];
  let fruit1 = fruits.splice(1, 3);
  console.log(fruit1);
}
let fruit2 = fruits.slice(1, 3);
console.log(fruit2);

let num = [91, 94, 96, 74, 92, 88, 23];
console.log(num.sort());
let alpha = ["aaa", "acc", "abb", "abc", "aab"];
console.log(alpha.sort());
