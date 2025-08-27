// const nameElement = document.querySelector(".name");

// nameElement.style.color = "blue";

// let btn = document.querySelector(".btn");

// btn.addEventListener("click", function () {
//   alert("Ram Ram Mitrrrrrrr");
// });
// btn.addEventListener("click", function () {
//   nameElement.style.color = "green";
//   nameElement.style.backgroundColor = "skyblue";
// });

// btn.addEventListener("mouseover", function () {
//   btn.style.backgroundColor = "blue";
// });

// btn.addEventListener("mouseout", function () {
//   btn.style.backgroundColor = "skyblue";
// });

let name = prompt("Enter Your Name : ");
let course = prompt("Enter Your Course");

let yourName = document.querySelector("#h1");
let yourCourse = document.querySelector(".course");
let btn = document.querySelector(".btn");

yourName.innerHTML = name;
yourCourse.innerHTML = course;

btn.addEventListener("click", function () {
  yourName.innerHTML = "You are a Fool 🤣 coz";
});

// btn.addEventListener("click", function () {
//   yourName.style.display = "flex";
//   yourCourse.style.display = "flex";
// });

// Dark and Light mode

let body = document.querySelector("body");
let mode = document.querySelector(".mode");
mode.addEventListener("click", function () {
  if (body.style.backgroundColor === "black") {
    body.style.backgroundColor = "white";
    body.style.color = "black";
  } else {
    body.style.backgroundColor = "black";
    body.style.color = "white";
  }
});

mode.addEventListener("click", function () {
  if (mode.innerHTML === " 💡 Dark") {
    mode.innerHTML = "💡 Light";
  } else {
    mode.innerHTML = " 💡 Dark";
  }
});

let br = document.createElement("br");
document.body.appendChild(br);

let div = document.createElement("div");
div.innerHTML = "<h1>Hiiiii</h1>";
document.body.appendChild(div);

let hr = document.createElement("hr");
document.body.appendChild(hr);
