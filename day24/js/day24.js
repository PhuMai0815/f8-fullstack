// Bài 1
var errors = {
  name: {
    required: "Vui lòng nhập họ tên",
    min: "Họ tên phải từ 5 ký tự",
  },
  email: {
    email: "Định dạng email không hợp lệ",
    unique: "Email đã có người sử dụng",
    required: "Vui lòng nhập địa chỉ email",
  },
  password: {
    required: "Vui lòng nhập mật khẩu",
    same: "Mật khẩu phải khớp với mật khẩu nhập lại",
  },
};

function getError(field) {
  if (errors[field]) {
    for (var key in errors[field]) return errors[field][key];
  } else {
    return "không tồn tại";
  }
}
console.log(getError("password"));

// bài 2
const customers = [
  { name: "Nguyễn Văn A", age: 11, address: "Ha Noi" },
  { name: "Nguyễn Văn B", age: 2, address: "Hai Phong" },
  { name: "Nguyễn Văn C", age: 12, address: "TP.HCM" },
];

const result = createCustomers(customers);
//   console.log(result);
function createCustomers(arr) {
  if (Array.isArray) {
    var arrUser = arr
      .sort(function (a, b) {
        return a.age - b.age;
      })
      .map(function (newarr) {
        newarr["shortName"] =
          newarr["name"].split(" ")[0] +
          " " +
          newarr["name"].split(" ")[newarr["name"].split(" ").length - 1];
        return newarr;
      });
    return arrUser;
  } else {
    return "không hợp lệ";
  }
}
console.log(result);

// Bài 3
const data = [];
var dataRegister = handleRegister(
  "Nguyen Van A",
  "123456",
  "nguyenvana@email.com"
);
var dataRegister = handleRegister(
  "Nguyen Van B",
  "1234567",
  "nguyenvanb@email.com"
);
var user = function (name, password, email) {
  this.email = email;
  this.password = password;
  this.email = email;
};
function handleRegister(name, password, email) {}
function handleLogin(email, password) {}

const dataLogin = handleLogin("Nguyen Van B", "1234567");
