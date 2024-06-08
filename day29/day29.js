var carousel = document.querySelector(".carousel");
var carouselInner = document.querySelector(".carousel-inner");
var carouselNav = document.querySelector(".carousel-nav");
var prevBtn = document.querySelector(".prev");
var nextBtn = document.querySelector(".next");
var items = document.querySelectorAll(".item");
var dots = document.querySelector(".dots");

var carouselItems = carouselInner.children;

var itemWidth = carouselInner.clientWidth; //trả về chiều rộng của element

var totalWidth = itemWidth * carouselItems.length;

carouselInner.style.width = `${totalWidth}px`;

var pagination = Array.from(carouselItems)
  .map(
    (item, index) =>
      `<span class="${
        index === 0 ? "active" : ""
      }" data-index="${index}"></span>`
  )
  .join("");

dots.innerHTML = pagination;
var dot = dots.querySelectorAll("span");

dot.forEach(function (dott, index) {
  dott.addEventListener("click", function () {
    position = itemWidth * -index;
    carouselInner.style.translate = `${position}px`;
    this.classList.add("active");
  });
});
// dotsItem.forEach(function (dot, i) {
//   if (dot.classList.contains("active")) {
//     dot.classList.remove("active");
//   }
//   if (currentIndex === +dot.dataset.index) {
//     dot.classList.add("active");
//   }
// });

// lắng nghe sự kiện click vào nút next
var position = 0;
var index = 0;

function nextSlide() {}
function prevSlide() {}

nextBtn.addEventListener("click", function () {
  if (Math.abs(position) < totalWidth - itemWidth) {
    position -= itemWidth;

    carouselInner.style.translate = `${position}px`;
  }
});

prevBtn.addEventListener("click", function () {
  if (position < 0) {
    position += itemWidth;

    carouselInner.style.translate = `${position}px`;
  }
});

var flag = false;
var pageXStart = 0;
var pageXMove = 0;
var distance = 0;
carouselInner.addEventListener("mousedown", function (e) {
  e.preventDefault();
  flag = true;
  pageXStart = e.pageX;
});
carouselInner.addEventListener("mousemove", function (e) {
  e.preventDefault();

  if (flag) {
    carouselInner.style.cursor = `move`;
    pageXMove = e.pageX;
    distance = pageXStart - pageXMove;

    if (distance > 150) {
      // next page(function)
      nextSlide();
    } else if (distance > 0) {
      carouselInner.style.translate = `${position - distance}px`;
    }

    if (distance < -150) {
      // lùi page(function)
      prevSlide();
    } else if (distance < 0) {
      carouselInner.style.translate = `${position - distance}px`;
    }
  }
});
document.addEventListener("mouseup", function (e) {
  flag = false;
  carouselInner.style.cursor = `default`;
  carouselInner.style.transition = `translate 0.20s linear`;
  carouselInner.style.translate = `${position}px`;
});

// items.forEach(function(item, index) {
//   dot=document.createElement('span')
//   dot.classList.add('dot')
//   dots.appendChild(dot)
//   if(index===0){
//     dot.classList.add('active')
//   }else{
//     dot.classList.add('dot')
//   }
// })
