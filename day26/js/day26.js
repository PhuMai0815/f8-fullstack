// Bài 1: Viết hàm tính tổng giá trị biểu thức

function total(...args) {
  var sum = 0;
  for (var i = 0; i < args.length; i++) {
    if (typeof args[i] !== "number") {
      return "Các tham số truyền vào phải là số.";
    }
    sum += args[i];
  }
  return sum;
}
console.log(total(1, 2, 3, 4, 5));
console.log(total(1, "a", 2));

//Bài 3: Viết lại hàm push() trong Array. Đặt tên là push2()
Array.prototype.push2 = function (...elements) {
  for (let i = 0; i < elements.length; i++) {
    this[this.length] = elements[i];
  }
  return this.length;
};
var ar = [1, 2, 3, 4, 5];
ar.push(6, 7);
console.log(ar);

//Bài 4: Viết làm vòng lặp filter trong Array. Đặt tên là filter2()

Array.prototype.filter2 = function (callback) {
  var arr = [];
  for (var i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      arr.push(this[i]);
    }
  }
  return arr;
};
var number = [1, 2, 3, 4, 5];
var number1 = number.filter2(function (num) {
  return num % 2 === 0;
});
console.log(number1);

//Bài 2: Viết 1 phương thức Prototype có tên là getCurrency có đối số truyền vào là đơn vị tiền tệ cần hiển thị

Number.prototype.getCurrency = function (currency) {
  if (!isNaN(this)) {
    var number = this.toLocaleString("vi-Vn");
    return `${number} ${currency}`;
  }
  return "Giá trị không hợp lệ";
};
String.prototype.getCurrency = function (currency) {
  var numberValue = parseFloat(this);
  if (!isNaN(numberValue)) {
    return numberValue.getCurrency(currency);
  }
  return "Giá trị không hợp lệ";
};
//Case 1
var price = 12000;
console.log(price.getCurrency("đ")); //Hiển thị: 12,000 đ

//Case 2
var price = "12000000";
console.log(price.getCurrency("đ")); //Hiển thị: 12,000,000 đ
