const addTaskBtn = document.getElementById('add-task');

function createTaskItem(taskName, taskPriority, taskDeadline) {
  const taskItem = document.createElement("div");
  taskItem.className = "task";

  const taskContent = document.createElement("span");
  taskContent.textContent = `${taskName} - ${taskPriority} - ${new Date(taskDeadline).toLocaleDateString()}`;

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.addEventListener("click", () => {
    taskItem.remove();
  });

  taskItem.appendChild(taskContent);
  taskItem.appendChild(removeBtn);
  return taskItem;
}

function addTaskToList(taskItem) {
  const taskList = document.querySelector('.task-list');
  taskList.appendChild(taskItem);
}

function validateInput(taskName, taskDeadline) {
  if (taskName === "" || taskDeadline === "") {
    alert("Please enter both task and deadline");
    return false;
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const deadlineDate = new Date(taskDeadline);

  if (deadlineDate < today) {
    alert("The deadline cannot be before today.");
    return false;
  }
  return true;
}

addTaskBtn.addEventListener('click', () => {
  const taskInput = document.getElementById("task");
  const prioritySelect = document.getElementById("priority");
  const deadlineInput = document.getElementById("deadline");

  const taskName = taskInput.value.trim();
  const taskPriority = prioritySelect.value;
  const taskDeadline = deadlineInput.value;

  if (validateInput(taskName, taskDeadline)) {
    const taskItem = createTaskItem(taskName, taskPriority, taskDeadline);
    addTaskToList(taskItem);

    taskInput.value = "";
    prioritySelect.value = "top";
    deadlineInput.value = "";
  }
});
