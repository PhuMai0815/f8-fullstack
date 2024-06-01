var overlay = document.querySelector(".overlay");
var bodyForm = document.querySelector(".bodyForm");
var btn = document.querySelector(".btn");
var form_user = document.querySelector(".form-user");
var tab_register = document.querySelector(".tab-register");
var tab_login = document.querySelector(".tab-login");
var title_header = document.querySelector(".title-header");
var box_login = document.querySelector(".box-login");
var box_register = document.querySelector(".box-register");
var text_input = document.getElementsByClassName("text-input");
var title = document.getElementsByClassName("title");
var form_login = document.querySelector(".form-login");
var form_register = document.querySelector(".form-register");
var err_email_login = document.querySelector(".err_email-login");
var err_pass_login = document.querySelector(".err_pass-login");
var err_name_register = document.querySelector(".err_name-register");
var err_email_register = document.querySelector(".err_email-register");
var err_pass_register = document.querySelector(".err_pass-register");
var email_login = document.getElementById("email_login");
var pass_login = document.getElementById("pass_login");
var name_register = document.getElementById("name_register");
var email_register = document.getElementById("email_register");
var pass_register = document.getElementById("pass_register");
var typePasswordLogin = document.querySelector(
  ".form-login input[type='password']"
);
var typePasswordRegister = document.querySelector(
  ".form-register input[type='password']"
);
var showHideLogin = document.querySelector(".eye i");

btn.addEventListener("click", function () {
  form_user.classList.add("active");
  overlay.classList.add("active");
  tab_login.classList.add("title-active");
  tab_register.classList.remove("title-active");
  box_login.classList.add("active");
});
overlay.addEventListener("click", function () {
  overlay.classList.remove("active");
  form_user.classList.remove("active");
  box_register.classList.remove("active");
  box_login.classList.remove("active");
  resetFormLogin();
  resetFormRegister();
});
tab_login.addEventListener("click", function () {
  tab_login.classList.add("title-active");
  tab_register.classList.remove("title-active");
  box_login.classList.add("active");
  box_register.classList.remove("active");
  resetFormRegister();
});
tab_register.addEventListener("click", function () {
  tab_register.classList.add("title-active");
  tab_login.classList.remove("title-active");
  box_register.classList.add("active");
  box_login.classList.remove("active");
  resetFormLogin();
});

function validateEmail(mail, ele) {
  if (mail.value === "") {
    ele.innerHTML = "Vui lòng nhập thông tin";
  } else {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail.value)) {
      ele.innerHTML = "";
    } else {
      ele.innerHTML = "Vui lòng nhập đúng định dạng email";
    }
  }
}
function validatePass(pass, ele) {
  if (pass.value === "") {
    ele.innerHTML = "Vui lòng nhập thông tin";
  } else {
    if (pass.value.length >= 6 && pass.value.length < 20) {
      ele.innerHTML = "";
    } else {
      ele.innerHTML = "mật khẩu ít nhất có 6-20 ký tự";
    }
  }
}

function ValidateName(name, ele) {
  if (name.value === "") {
    ele.innerHTML = "Vui lòng nhập thông tin";
  } else {
    ele.innerHTML = "";
  }
}
function resetFormLogin() {
  form_login.reset();
  err_email_login.innerHTML = "";
  err_pass_login.innerHTML = "";
}

function resetFormRegister() {
  form_register.reset();
  err_name_register.innerHTML = "";
  err_email_register.innerHTML = "";
  err_pass_register.innerHTML = "";
}

//   showHideLogin.addEventListener('click',function() {
//     if(typePasswordLogin.type === password){
//         typePasswordLogin.type = 'text'
//     }else{
//         typePasswordLogin.type = 'password'

//     }
// })

//   showHideRegister.addEventListener('click',function() {
//     showPass(this,typePasswordRegister)
//   })

// login
pass_login.addEventListener("input", function () {
  validatePass(pass_login, err_pass_login);
  validateEmail(email_login, err_email_login);
  box_login.classList.add("active");
});

email_login.addEventListener("input", function () {
  validateEmail(email_login, err_email_login);
  validatePass(pass_login, err_pass_login);
});

pass_login.addEventListener("blur", function () {
  if (pass_login.value === "" && email_login.value === "") {
    err_pass_login.innerHTML = "Vui lòng nhập thông tin";
    err_email_login.innerHTML = "Vui lòng nhập thông tin";
  }
});
email_login.addEventListener("blur", function () {
  if (pass_login.value === "" && email_login.value === "") {
    err_pass_login.innerHTML = "Vui lòng nhập thông tin";
    err_email_login.innerHTML = "Vui lòng nhập thông tin";
  }
});
//   resgiter
name_register.addEventListener("input", function () {
  ValidateName(name_register, err_name_register);
  validatePass(pass_register, err_pass_register);
  validateEmail(email_register, err_email_register);
});

pass_register.addEventListener("input", function () {
  ValidateName(name_register, err_name_register);
  validatePass(pass_register, err_pass_register);
  validateEmail(email_register, err_email_register);
});

email_register.addEventListener("input", function () {
  ValidateName(name_register, err_name_register);
  validateEmail(email_register, err_email_register);
  validatePass(pass_register, err_pass_register);
});
name_register.addEventListener("blur", function () {
  if (
    pass_register.value === "" &&
    email_register.value === "" &&
    name_register.value === ""
  ) {
    err_pass_register.innerHTML = "Vui lòng nhập thông tin";
    err_email_register.innerHTML = "Vui lòng nhập thông tin";
    err_name_register.innerHTML = "Vui lòng nhập thông tin";
  }
});
pass_register.addEventListener("blur", function () {
  if (
    pass_register.value === "" &&
    email_register.value === "" &&
    name_register.value === ""
  ) {
    err_pass_register.innerHTML = "Vui lòng nhập thông tin";
    err_email_register.innerHTML = "Vui lòng nhập thông tin";
    err_name_register.innerHTML = "Vui lòng nhập thông tin";
  }
});
email_register.addEventListener("blur", function () {
  if (
    pass_login.value === "" &&
    email_login.value === "" &&
    name_register.value === ""
  ) {
    err_pass_login.innerHTML = "Vui lòng nhập thông tin";
    err_email_login.innerHTML = "Vui lòng nhập thông tin";
    err_name_register.innerHTML = "Vui lòng nhập thông tin";
  }
});
