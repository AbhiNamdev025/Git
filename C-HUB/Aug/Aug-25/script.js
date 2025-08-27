let form = document.getElementById("myForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let myname = document.getElementById("name").value;
  let email = document.getElementById("email").value;

  localStorage.setItem("userName", myname);
  localStorage.setItem("userEmail", email);

  let output = document.getElementById("output");

  let savedName = localStorage.getItem("userName", myname);
  let savedEmail = localStorage.getItem("userEmail", email);

  if (savedName && savedEmail) {
    output.textContent = `Previously Saved 👉🏻   Name: ${savedName}, Email: ${savedEmail}`;
  }
});

// Array Mapping

// const add = (a, b) => {
//   return a + b;
// };

// array = [11, 12, 13, 14, 15, 16, 17, 18, 19];
// const square = array.map((x) => {
//   return x * x;
// });
// console.log(square);
// console.log(array);

// function square(x) {
//   return x * x;
// }

// console.log(array.map(square));

// Error Handling

// try {
//   array = [11, 12, 13, 14, 15, 16, 17, 18, 19];
//   const square = array.map((x) => {
//     return x * x;
//   });
//   console.log(square);
// } catch {
//   console.log("Error noticed", error.message);
// } finally {
//   console.log("Main Chal gya");
// }

let name = document.getElementById("names");
let array = ["Abcd", "AB", "CD", "EF", "GH"];

let index = 0;

function showNextName() {
  name.innerHTML = `<p>${array[index]}</p>`;
  index = (index + 1) % array.length;
}
showNextName();
setInterval(showNextName, 2000);
