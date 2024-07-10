const SEVERAPI = `http://localhost:3000/todos`;
const add_todo_btn = document.querySelector(".btn-add");
const box_add_task = document.querySelector(".box-add-task");
const btn_save = box_add_task.querySelector(".save-btn");
const btn_cancel = box_add_task.querySelector(".cancel-btn");
const task_list = document.querySelector(".task-list");
const task_list_done = document.querySelector(".task-list-done");
const search_input = document.querySelector(".search-input");

const getTodo = async () => {
  const response = await fetch(`${SEVERAPI}`);
  const data = await response.json();
  return data;
};

const postTodo = async (data) => {
  const response = await fetch(`${SEVERAPI}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

const deleteTodo = async (id) => {
  const response = await fetch(`${SEVERAPI}/${id}`, {
    method: "DELETE",
  });
  return response.json();
};

const updateTodo = async (id, data) => {
  const response = await fetch(`${SEVERAPI}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

async function render() {
  const data = await getTodo();
  const listTodoComplete = data.filter((todo) => todo.status === "true");
  const listTodoUnComplete = data.filter((todo) => todo.status === "false");
  var tagControlTodo = `<div class="task-option">
  <button class="btn-option delete-option">
    <i class="fa-solid fa-trash-can"></i>
  </button>
  <button class="btn-option edit-option">
    <i class="fa-regular fa-pen-to-square"></i>
  </button>
  <button class="btn-option complete-option">
    <i class="fa-solid fa-check"></i>
  </button>
</div>`;

  const tagItemCompleHtml = listTodoComplete
    .map(
      (item) => `
  <div class="task-item">
    <p class="task-title">${item.title}</p>
    ${tagControlTodo}
  </div>
  `
    )
    .join("");

  const tagItemUnCompleHtml = listTodoUnComplete
    .map(
      (item) => `
  <div class="task-item">
    <p class="task-title">${item.title}</p>
    ${tagControlTodo}
  </div>
  `
    )
    .join("");

  const tagItemComplete = document.createElement("div");
  tagItemComplete.innerHTML = tagItemCompleHtml;
  task_list_done.append(tagItemComplete);

  const tagItemUnComplete = document.createElement("div");
  tagItemUnComplete.innerHTML = tagItemUnCompleHtml;
  task_list.append(tagItemUnComplete);
}

function addTodo() {
  add_todo_btn.addEventListener("click", (e) => {
    e.stopPropagation();
    box_add_task.classList.add("show");
  });

  document.querySelector(".inner-box").addEventListener("click", (e) => {
    e.stopPropagation();
  });

  document.addEventListener("click", () => {
    box_add_task.classList.remove("show");
  });

  btn_cancel.addEventListener("click", () => {
    box_add_task.classList.remove("show");
  });

  btn_save.addEventListener("click", async () => {
    const inputEl = box_add_task.querySelector(".add-input");
    const valueInput = inputEl.value;
    const data = {
      status: "false",
    };
    data.title = valueInput;
    await postTodo(data);
    inputEl.value = "";
    box_add_task.classList.remove("show");
    render();
  });
}

function deleteTaskTodo() {
  const removeBtnsUnfinished = task_list.querySelectorAll(".delete-option");
  const removeBtnsFinished = task_list_done.querySelectorAll(".delete-option");
  removeBtnsUnfinished.forEach((removeBtn, i) => {
    removeBtn.addEventListener("click", async (e) => {
      const data = await getTodo();
      const todoUnfinished = data.filter((todo) => {
        return todo.status === "false";
      });

      await deleteTodo(todoUnfinished[i].id);
      render();
    });
  });

  removeBtnsFinished.forEach((removeBtn, i) => {
    removeBtn.addEventListener("click", async (e) => {
      const data = await getTodo();
      const todoFinished = data.filter((todo) => {
        return todo.status === "true";
      });

      await deleteTodo(todoFinished[i].id);
      render();
    });
  });
}

function start() {
  render();
  addTodo();
  deleteTaskTodo();
}

start();
