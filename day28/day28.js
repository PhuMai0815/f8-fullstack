var form = document.querySelector(".inputTask");
var input = document.querySelector(".input");
var task_list = document.querySelector(".tasks");
var btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  var valueinput = input.value;
  if (!valueinput) {
    alert("Vui lòng nhập task");
  } else {
    const task_el = document.createElement("div");
    task_el.classList.add("task");
    const content_el = document.createElement("div");
    content_el.classList.add("content");
    const task_input = document.createElement("input");
    task_input.classList.add("text");
    task_input.type = "text";
    task_input.setAttribute("readonly", "readonly");
    task_input.value = valueinput;
    content_el.appendChild(task_input);

    const btn_action = document.createElement("div");
    btn_action.classList.add("btn-action");
    const rewite = document.createElement("i");
    rewite.classList.add("rewrite");
    rewite.classList.add("fa-solid");
    rewite.classList.add("fa-pen-to-square");
    btn_action.appendChild(rewite);
    const dele = document.createElement("i");
    dele.classList.add("delete");
    dele.classList.add("fa-regular");
    dele.classList.add("fa-trash-can");
    btn_action.appendChild(dele);
    task_list.appendChild(btn_action);
    task_el.appendChild(content_el);
    task_list.appendChild(task_el);
    task_el.appendChild(btn_action);
    input.value = "";

    rewite.addEventListener("click", function () {
      task_input.removeAttribute("readonly");
      task_input.focus();
      task_input.style.background = "#151533";
      dele.style.display = "none";
      rewite.style.display = "none";
      // btn_action.innerHTML='Add Task'
      // btn_action.style.color='#fff'
      // btn_action.style.padding='5px 9px'
      const addtask = document.createElement("label");
      addtask.innerText = "Add Task";
      addtask.style.color = "#fff";
      addtask.style.padding = "5px 8px";
      btn_action.appendChild(addtask);

      addtask.addEventListener("click", function () {
        task_input.setAttribute("readonly", "readonly");
        dele.style.display = "block";
        rewite.style.display = "block";
        addtask.style.display = "none";
        task_input.style.background = "#2b0097";
      });
    });
    dele.addEventListener("click", function () {
      task_list.removeChild(task_el);
    });
  }
});
