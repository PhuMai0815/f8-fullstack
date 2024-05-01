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
var btn3 = document.getElementById("btn3");
function numTostr(n) {
  var string = n.toString();
  var split = string.split("");
  var string2 = "";
  var temp = "";
  for (let i = 0; i < split.length; i++) {
    switch (split[i]) {
      case "0":
        temp = "không";
        if (split.length == 2 && i == 1) {
          temp = "";
        }
        break;
      case "1":
        temp = "một";
        if (split.length == 4) {
          if (i == 0) {
            temp += " ngàn";
          } else if (i == 1) {
            temp += " trăm";
          }
        } else if (split.length == 3) {
          if (i == 0) {
            temp += " trăm";
          }
        } else if (split.length == 2) {
          if (i == 0) {
            temp = " mười";
          }
        }

        break;
      case "2":
        temp = "hai";
        if (split.length == 4) {
          if (i == 0) {
            temp += " ngàn";
          } else if (i == 1) {
            temp += " trăm";
          }
        } else if (split.length == 3) {
          if (i == 0) {
            temp += " trăm";
          }
        } else if (split.length == 2) {
          if (i == 0) {
            temp += " mươi";
          }
        }

        break;
      case "3":
        temp = "ba";
        if (split.length == 4) {
          if (i == 0) {
            temp += " ngàn";
          } else if (i == 1) {
            temp += " trăm";
          }
        } else if (split.length == 3) {
          if (i == 0) {
            temp += " trăm";
          }
        } else if (split.length == 2) {
          if (i == 0) {
            temp += " mươi";
          }
        }

        break;
      case "4":
        temp = "bốn";
        if (split.length == 4) {
          if (i == 0) {
            temp += " ngàn";
          } else if (i == 1) {
            temp += " trăm";
          }
        } else if (split.length == 3) {
          if (i == 0) {
            temp += " trăm";
          }
        } else if (split.length == 2) {
          if (i == 0) {
            temp += " mươi";
          }
        }

        break;
      case "5":
        temp = "năm";
        if (split.length == 4) {
          if (i == 0) {
            temp += " ngàn";
          } else if (i == 1) {
            temp += " trăm";
          }
        } else if (split.length == 3) {
          if (i == 0) {
            temp += " trăm";
          }
        } else if (split.length == 2) {
          if (i == 0) {
            temp += " mươi";
          }
        }

        break;
      case "6":
        temp = "sáu";
        if (split.length == 4) {
          if (i == 0) {
            temp += " ngàn";
          } else if (i == 1) {
            temp += " trăm";
          }
        } else if (split.length == 3) {
          if (i == 0) {
            temp += " trăm";
          }
        } else if (split.length == 2) {
          if (i == 0) {
            temp += " mươi";
          }
        }

        break;
      case "7":
        temp = "bảy";
        if (split.length == 4) {
          if (i == 0) {
            temp += " ngàn";
          } else if (i == 1) {
            temp += " trăm";
          }
        } else if (split.length == 3) {
          if (i == 0) {
            temp += " trăm";
          }
        } else if (split.length == 2) {
          if (i == 0) {
            temp += " mươi";
          }
        }

        break;
      case "8":
        temp = "tám";
        if (split.length == 4) {
          if (i == 0) {
            temp += " ngàn";
          } else if (i == 1) {
            temp += " trăm";
          }
        } else if (split.length == 3) {
          if (i == 0) {
            temp += " trăm";
          }
        } else if (split.length == 2) {
          if (i == 0) {
            temp += " mươi";
          }
        }

        break;
      case "9":
        temp = "chín";
        if (split.length == 4) {
          if (i == 0) {
            temp += " ngàn";
          } else if (i == 1) {
            temp += " trăm";
          }
        } else if (split.length == 3) {
          if (i == 0) {
            temp += " trăm";
          }
        } else if (split.length == 2) {
          if (i == 0) {
            temp += " mươi";
          }
        }

        break;
    }
    string2 += temp + " ";
  }
  return string2;
}
btn3.addEventListener("click", (event) => {
  event.preventDefault();
  var input3 = parseInt(document.getElementById("input3").value);
  if (input3 < 0 || input3 > 9999) {
    alert("Vui lòng nhập trong khoảng từ 0 --> 9999 !");
  } else {
    document.getElementById("result3").innerHTML = numTostr(input3);
  }
});
