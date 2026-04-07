document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("taskInput");
  const addTodoBtn = document.getElementById("addTodoBtn");
  const todoList = document.getElementById("todoList");

  const todos = JSON.parse(localStorage.getItem("todos")) || [];

  function addTodo() {
    const taskText = taskInput.value.trim();
    if (taskInput === "") return;
    todos.push({ text: taskText, completed: false });
    taskInput.value = "";
    saveTodo();
    renderTodos();
  }

  function saveTodo() {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  addTodoBtn.addEventListener("click", addTodo);

  taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  });

  function renderTodos() {
    todoList.innerHTML = "";
    todos.forEach((todos, index) => {
      const listItem = document.createElement("li");
      listItem.className =
        "list-group-item d-flex justify-content-between aling-items-center ";

      listItem.textContent = todos.text;

      if (todos.completed) {
        listItem.classList.add("completed");
      }

      const completeBtn = document.createElement("button");
      completeBtn.className = "btn btn-success btn-sm";
      completeBtn.textContent = "complete";
      completeBtn.addEventListener("click", () => {
        toggleCompleteTask(index);
      });

      const deleteBtn = document.createElement("button");
      deleteBtn.className = "btn btn-danger btn-sm";
      deleteBtn.textContent = "Delete";
      deleteBtn.addEventListener("click", () => {
        deleteTask(index);
      });

      const btnDiv = document.createElement("div");
      btnDiv.className = "d-flex gap-2";
      btnDiv.appendChild(completeBtn);
      btnDiv.appendChild(deleteBtn);

      listItem.appendChild(btnDiv);
      todoList.appendChild(listItem);
    });
  }

  function toggleCompleteTask(index) {
    todos[index].completed = !todos[index].completed;
    saveTodo();
    renderTodos();
  }

  function deleteTask(index) {
    todos.splice(index, 1);
    saveTodo();
    renderTodos();
  }

  renderTodos();
});
