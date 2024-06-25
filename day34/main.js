var list = document.querySelector(".list");
Array.from(list.children).forEach(function (item) {
  item.draggable = "true";
  item.addEventListener("dragstart", function () {
    item.classList.add("opacity");
  });
  item.addEventListener("dragend", function () {
    item.classList.remove("opacity");
  });
});

var lessons = document.querySelectorAll(".list-item:not(.title-module)");
lessons.forEach(function (item, index) {
  item.style.display = "flex";
  index++;
  var innerItem = item.innerText;
  item.innerHTML = `<span class = "index-lesson">Bài: ${index} </span><div> ${innerItem} </div>`;
});

var modules = document.querySelectorAll(".title-module");
modules.forEach(function (item, index) {
  item.style.display = "flex";
  index++;
  var innerItem = item.innerText;
  item.innerHTML = `<span class = "index-module">Bài: ${index} </span><div>${innerItem}</div>`;
});

list.addEventListener("dragover", function (e) {
  const itemDrag = document.querySelector(".list-item.opacity");
  const itemsNotDrag = document.querySelectorAll(".list-item:not(.opacity)");
  const node = Array.from(itemsNotDrag).find((item) => {
    return (
      e.pageY <=
      item.offsetTop + itemDrag.offsetHeight / 2 + itemDrag.offsetHeight / 4
    );
  });
  list.insertBefore(itemDrag, node);
});

list.addEventListener("dragend", function () {
  const listItem = document.querySelectorAll(
    ".list-item:not(.title-module) span"
  );
  const listModule = document.querySelectorAll(".title-module span");
  listItem.forEach((item, index) => {
    index++;
    item.innerHTML = `Bài ${index}: `;
  });
  listModule.forEach((module, index) => {
    index++;
    module.innerHTML = `Module ${index}: `;
  });
});
