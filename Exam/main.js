const textTaskInput = document.getElementById("text-task");
const addTaskButton = document.getElementById("add-task");
const taskList = document.querySelector(".list-group");

function addTask() {
  const taskText = textTaskInput.value.trim();
  if (taskText) {
    const task = {
      text: taskText,
      completed: false
    };

    const listItem = createTaskElement(task);

    taskList.appendChild(listItem);
    textTaskInput.value = "";

    const deleteButton = listItem.querySelector(".delete-button");
    const doneButton = listItem.querySelector(".done-button");

    deleteButton.addEventListener("click", function () {
      listItem.remove();
      saveTasksToLocalStorage();
    });

    doneButton.addEventListener("click", function () {
      toggleTaskCompleted(task);
      listItem.classList.toggle("completed", task.completed);
      saveTasksToLocalStorage();
    });

    saveTasksToLocalStorage();
  }
}

addTaskButton.addEventListener("click", addTask);

function createTaskElement(task) {
  const listItem = document.createElement("li");
  listItem.className = "list-group-item d-flex justify-content-between align-items-center task-item";
  listItem.textContent = task.text;

  const actions = document.createElement("span");
  actions.className = "badge bg-primary";
  actions.innerHTML = `<button type="button" class="btn btn-outline-success image-button p-1 me-1 done-button"><img src="./images/done.png" alt="Done"></button>
                       <button type="button" class="btn btn-outline-danger image-button p-1 ms-1 delete-button"><img src="./images/trash.png" alt="Delete"></button>`;
  listItem.appendChild(actions);

  return listItem;
}

function toggleTaskCompleted(task) {
  task.completed = !task.completed;
}

function saveTasksToLocalStorage() {
  const tasks = Array.from(taskList.querySelectorAll(".task-item")).map(taskElement => {
    const taskText = taskElement.textContent;
    const completed = taskElement.classList.contains("completed");
    return { text: taskText, completed };
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasksFromLocalStorage() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  for (const taskData of tasks) {
    const task = {
      text: taskData.text,
      completed: taskData.completed
    };
    const listItem = createTaskElement(task);
    taskList.appendChild(listItem);

    const deleteButton = listItem.querySelector(".delete-button");
    const doneButton = listItem.querySelector(".done-button");

    deleteButton.addEventListener("click", function () {
      listItem.remove();
      saveTasksToLocalStorage();
    });

    doneButton.addEventListener("click", function () {
      toggleTaskCompleted(task);
      listItem.classList.toggle("completed", task.completed);
      saveTasksToLocalStorage();
    });
  }
}

loadTasksFromLocalStorage();
