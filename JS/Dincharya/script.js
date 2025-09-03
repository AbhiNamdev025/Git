let addButton = document.querySelector(".add");
let success = document.querySelector(".success");
let error = document.querySelector(".error");
let textInput = document.querySelector("#text-input");
let tasks = document.querySelector(".tasks");
let deleted = document.querySelector(".deleted");

let taskCount = 1;

function popup(element) {
  element.style.display = "flex";
  setTimeout(() => {
    element.style.display = "none";
  }, 2000);
}

function createTask(taskText) {
  const taskDiv = document.createElement("div");
  taskDiv.classList.add("task");

  taskDiv.innerHTML = `
    <span class="taskName">${taskText}</span>
    <button class="del">🗑️</button>
  `;

  taskDiv.querySelector(".del").addEventListener("click", () => {
    taskDiv.remove();
    popup(deleted);
  });

  tasks.appendChild(taskDiv);
}

addButton.addEventListener("click", () => {
  const taskText = textInput.value;

  if (taskText === "") {
    popup(error);
  } else {
    createTask(taskText);
    popup(success);
    saveToLocal(taskText);
    textInput.value = "";
  }
});

function saveToLocal(taskText) {
  localStorage.setItem(`दिनचर्या TASK ${taskCount}`, taskText);
  taskCount++;
}
function getFromLocal() {
  console.log(localStorage.getItem("दिनचर्या TASK 1"));
}

getFromLocal();
