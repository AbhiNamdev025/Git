let addButton = document.querySelector(".add");
let success = document.querySelector(".success");
let error = document.querySelector(".error");
let textInput = document.querySelector("#text-input");
let tasks = document.querySelector(".tasks");
let deleted = document.querySelector(".deleted");
let edited = document.querySelector(".edit");

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
    <div><button class="del">🗑️</button>
    <button class="edit">✏️</button></div>
  `;

  taskDiv.querySelector(".del").addEventListener("click", () => {
    taskDiv.remove();
    removeFromLocal(taskText);
    popup(deleted);
  });

  taskDiv.querySelector(".edit").addEventListener("click", () => {
    popup(edited);
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

//  Saving
function saveToLocal(taskText) {
  let allTasks = JSON.parse(localStorage.getItem("दिनचर्या TASK")) || [];
  allTasks.push(taskText);
  localStorage.setItem("दिनचर्या TASK", JSON.stringify(allTasks));
}

// extracting
function getFromLocal() {
  let allTasks = JSON.parse(localStorage.getItem("दिनचर्या TASK")) || [];
  allTasks.forEach((taskText) => {
    createTask(taskText);
  });
}

//  Remove
function removeFromLocal(taskText) {
  let allTasks = JSON.parse(localStorage.getItem("दिनचर्या TASK")) || [];
  allTasks = allTasks.filter((task) => task !== taskText);
  localStorage.setItem("दिनचर्या TASK", JSON.stringify(allTasks));
}

getFromLocal();
