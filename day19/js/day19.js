// Bai 1: N số fibonaci
// Hiển thị N số Fibonaci đầu tiên
// Ví dụ: Gán n = 10 sẽ hiển thị danh sách 10 số fibonaci

var n = 10;
function Fibonacci(n, a = 0, b = 1) {
  if (n === 0) {
    return;
  }
  document.write("<p>" + b + "</p>");
  Fibonacci(n - 1, b, a + b);
}

if (n <= 0) {
  document.write("mời nhập lại");
} else {
  document.write(`Bài 1: <br> ${n} số Fibonacci đầu tiên:`);
  Fibonacci(n);
}

// bai 2: Đảo ngược số
// Viết hàm đảo ngược số nguyên với tham số là số cần đảo ngược
var n = 1234;
if (typeof n === "number") {
  function reverseNumber(n) {
    return Number(n.toString().split("").reverse().join(""));
  }
  document.write("Bài 2: số " + n + " đảo ngược thành: " + reverseNumber(n));
} else {
  document.write("Bài 2: Mời nhập lại");
}

//bai 3:
