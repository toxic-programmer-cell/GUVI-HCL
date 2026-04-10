document.addEventListener("DOMContentLoaded", function () {
  const todoInput = document.getElementById("taskInput");
  const addTodoBtn = document.getElementById("addTodoBtn");
  const todoList = document.getElementById("todoList");

  const todos = JSON.parse(localStorage.getItem("todos")) || [];

  function renderTodo() {
    todoList.innerHTML = "";
    todos.forEach((todo, index) => {
      const taskList = document.createElement("li");
      taskList.className =
        "list-items-group d-flex justify-content-between align-items-center";

      const todoSpan = document.createElement("span");
      todoSpan.textContent = todo.text;

      const btnDiv = document.createElement("div");
      btnDiv.className = "d-flex gap-2";

      const completeBtn = document.createElement("button");
      completeBtn.className = "btn btn-success btn-sm";
      completeBtn.innerText = "Complete";
      completeBtn.addEventListener("click", () => {
        completeTodo(index);
      });

      if (todo.completed) {
        todoSpan.classList.add("completed");
      }

      const deleteBtn = document.createElement("button");
      deleteBtn.className = "btn btn-danger btn-sm";
      deleteBtn.innerText = "Delete";
      deleteBtn.addEventListener("click", () => {
        deleteTodo(index);
      });

      todoList.appendChild(taskList);

      taskList.appendChild(todoSpan);
      taskList.appendChild(btnDiv);

      btnDiv.appendChild(completeBtn);
      btnDiv.appendChild(deleteBtn);
    });
  }

  todoInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  });

  function deleteTodo(index) {
    todos.splice(index, 1);
    saveTodo();
    renderTodo();
  }

  function completeTodo(index) {
    todos[index].completed = !todos[index].completed;
    saveTodo();
    renderTodo();
  }

  function addTodo() {
    const todoText = todoInput.value.trim();

    if (todoText === "") return;

    todos.push({ text: todoText, completed: false });
    todoInput.value = "";
    saveTodo();
    renderTodo();
  }

  function saveTodo() {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  addTodoBtn.addEventListener("click", addTodo);

  renderTodo();
});
