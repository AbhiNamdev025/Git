let keyPressed = 0;
let buttonInput = document.querySelectorAll(".input-button");
let input = document.getElementById("input");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let erase = document.getElementById("erase");
let error = document.querySelector(".error");
function popup(element) {
  element.style.display = "flex";
  setTimeout(() => {
    element.style.display = "none";
  }, 2000);
}
input.value = "";

buttonInput.forEach((button_class) => {
  button_class.addEventListener("click", () => {
    if (keyPressed == 1) {
      input.value = "";
      keyPressed = 0;
    } else {
      input.value += button_class.value;
    }
  });
});

equal.addEventListener("click", () => {
  keyPressed = 1;
  let inp_val = input.value;
  try {
    let solution = eval(inp_val);
    input.value = solution;
  } catch (err) {
    popup(error);
  }
});

clear.addEventListener("click", () => {
  input.value = "";
});
erase.addEventListener("click", () => {
  input.value = input.value.slice(0, -1);
});
