var counter = document.querySelector(".counter");
var btn = document.querySelector(".btn");

let timer = 0;
let count = 30;
let isDownload = false;

const actionCounter = function (start) {
  if (timer <= start) {
    count--;
    counter.innerText = count;
    timer = start + 1000;
  }
  if (count === 0) {
    isDownload = true;
    btn.removeAttribute("disabled");
    btn.addEventListener("click", function () {
      if (isDownload) {
        window.location.href = "https://fullstack.edu.vn";
      }
    });
  }
  if (count > 0) {
    window.requestAnimationFrame(actionCounter);
  }
};
document.addEventListener("DOMContentLoaded", function () {
  requestAnimationFrame(actionCounter);
});
