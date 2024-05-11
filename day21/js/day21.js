var numbers = [-2, 3, 6, 16, 5, -9];

// BÀI1
var intArr = [3, 4, 6, 2, 6, 1, 11, 9, 19, 9, 11, 3];
var max = intArr[0],
  min = intArr[0];
var indexMax, indexMin;
for (var i = 1; i < intArr.length; i++) {
  if (max < intArr[i]) {
    max = intArr[i];
    indexMax = i;
  }
  if (min > intArr[i]) {
    min = intArr[i];
    indexMin = i;
  }
}
console.log(`Mảng số nguyên: intArr = [${intArr}]`);
console.log(
  ` Số lớn nhất = ${intArr[indexMax]}, tại vị trí index = ${indexMax}`
);
console.log(
  ` Số nhỏ nhất = ${intArr[indexMin]}, tại vị trí index = ${indexMin}`
);

// BÀI 2
var TBC = function (arr) {
  let sum = 0,
    count = 0;
  numbers.forEach(function (value) {
    if (check(value)) {
      sum += value;
    }
  });
  function check(value) {
    if (value < 2) {
      return false;
    }
    for (var i = 2; i < value; i++) {
      if (value % i === 0) {
        return false;
      }
    }
    count++;
    return true;
  }
  return sum / count;
};
console.log(TBC(numbers));

// BÀI3

var newArr = [1, 6, 2, 10, 1, 2, 16];

function getArr(arr) {
  return arr.filter(function (item, index) {
    return arr.indexOf(item) === index;
    // console.log(index,item);
  });
}
console.log(getArr(newArr));

// BÀI4
var customrs = [1, 5, 3, 9, 4, 16];
var element = 2;

function addElement(arr) {
  var newCustomrs = [];
  newCustomrs[newCustomrs.length] = element;
  for (var index in customrs) {
    newCustomrs[newCustomrs.length] = customrs[index];
  }
  return newCustomrs.sort(function (a, b) {
    return a - b;
  });
}
console.log(addElement(customrs));
