/*
    Bài 1: tính tiền taxi
*/
var money = 15000;
var x = 1502;
if (x <= 1 && x > 0) {
  document.write("Số tiền đi taxi là: " + money + " VND <br>");
} else if (x > 1 && x <= 5) {
  money = money + 13500 * (x - 1);
  document.write("Số tiền đi taxi là: " + money + " VND <br>");
} else if (x > 5) {
  money = money + 11000 * (x - 1);
  document.write("Số tiền đi taxi là: " + money + " VND <br>");
} else if (x > 120) {
  money = 0.1 * (money + 11000 * (x - 1));
  document.write("Số tiền đi taxi là: " + money + " VND <br>");
} else if (x <= 1 && x > 0) {
  document.write("Số tiền đi taxi là: " + money + " VND <br>");
} else {
  document.write("Bạn đã nhập sai số kilomet <br>");
}

/* Bài 2: Tính tiền điện 
    input: số điện tiêu thụ hằng tháng
    output: hiển thị số tiền phải đóng
 */

var money,
  kwh = -9999999999;
if (kwh >= 0 && kwh <= 50) {
  money = kwh * 1678;
  document.write("Số tiền điện tháng này là: " + money + " VND <br>");
} else if (kwh >= 51 && kwh <= 100) {
  money = kwh * 1734;
  document.write("Số tiền điện tháng này là: " + money + " VND <br>");
} else if (kwh >= 101 && kwh <= 200) {
  money = kwh * 2014;
  document.write("Số tiền điện tháng này là: " + money + " VND <br>");
} else if (kwh >= 201 && kwh <= 300) {
  money = kwh * 2536;
  document.write("Số tiền điện tháng này là: " + money + " VND <br>");
} else if (kwh >= 301 && kwh <= 400) {
  money = kwh * 2834;
  document.write("Số tiền điện tháng này là: " + money + " VND <br>");
} else if (kwh >= 401) {
  money = kwh * 2927;
  document.write("Số tiền điện tháng này là: " + money + " VND <br>");
} else {
  document.write("Bạn đã nhập sai số điện <br>");
}

// Bài 3: Tính giá trị biểu thức
var n = 5;
var total = 0;
for (var i = 1; i <= n; i++) {
  total = total + i * (i + 1);
}
document.write("Tổng S =  " + total + " <br>");

// Bài 4: Viết hàm kiểm tra số nguyên số
var n = 2,
  check = true;
if (n <= 1 || n % 1 !== 0) {
  document.write("bài 4: mời nhập lại<br>");
} else {
  for (var i = 2; i < n; i++) {
    if (n % i === 0) {
      check = false;
      break;
    }
  }
  if (check === false) {
    document.write(" " + n + " không phải là số nguyên tố <br>");
  } else {
    document.write(" " + n + " là số nguyên tố <br>");
  }
}
// Bai 5:
var n = 5,
  result = " ",
  count = 1;
for (var i = 1; i <= n; i++) {
  for (var j = 1; j <= i; j++) {
    result = result + count + " ";
    count++;
  }
  result += "<br>";
}
document.write("<p>" + result + "</p>");
