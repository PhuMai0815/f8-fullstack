// bài 1:

var arrA = [1, 4, 3, 2];
var arrB = [5, 2, 6, 7, 1];
//[1,2]
var arrC = [];
arrA.forEach(function (item) {
  if (arrB.includes(item)) {
    arrC.push(item);
  }
});
console.log(arrC);

// bài 2
var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];

var result = [];
var flat = function (arrIn) {
  for (var i = 0; i < arrIn.length; i++) {
    var child = arrIn[i];
    if (Array.isArray(arrIn[i])) {
      flat(child);
    } else {
      result.push(child);
    }
  }
  return result;
};
console.log(flat(arr));

// Bai3

var arrCheckTypeOf = [
  ["a", 1, true],
  ["b", 2, false],
];

var newArrCheckTypeOf = [];
var flat = function (arrIn) {
  for (var i = 0; i < arrIn.length; i++) {
    var child = arrIn[i];
    if (Array.isArray(arrIn[i])) {
      flat(child);
    } else {
      newArrCheckTypeOf.push(child);
    }
  }
  return newArrCheckTypeOf;
};
var newFlat = flat(arrCheckTypeOf);

var all = [[], [], []];

for (var key in newFlat) {
  var element = newFlat[key];
  var type = typeof element;
  // console.log(element,type);
  if (type === "string") {
    all[0].push(element);
  } else if (type === "number") {
    all[1].push(element);
  } else if (type === "boolean") {
    all[2].push(element);
  }
}
console.log(all);

// Bài 4

var news = [
  {
    img: "https://picsum.photos/200",
    title: "Tiêu đề bài viết 1",
    paragrap:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore expedita ducimus nesciunt dolor nostrum consectetur architecto molestiae nemo eaque facilis!",
  },
  {
    img: "https://picsum.photos/200",
    title: "Tiêu đề bài viết 2",
    paragrap:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore expedita ducimus nesciunt dolor nostrum consectetur architecto molestiae nemo eaque facilis!",
  },
  {
    img: "https://picsum.photos/200",
    title: "Tiêu đề bài viết 3",
    paragrap:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore expedita ducimus nesciunt dolor nostrum consectetur architecto molestiae nemo eaque facilis!",
  },
];

var container = document.querySelector(".container");

var htmls = "";

news.forEach(function (index) {
  htmls += `
    <div class="box">
        <img src ="${index.img}" class="img"></img>
        <div class="text">
            <h1 class="title">${index.title} </h1>
            <p class="para">${index.paragrap} </p>
        </div>
    </div>
    <hr></hr>
    `;
});
container.innerHTML = htmls;
