import { config } from "./config.js";
import { client } from "./client.js";
const limitPostInPage = 10;
let page = 1;
const loadMore = false;
const { SERVER_AUTH_API } = config;
client.setUrl(SERVER_AUTH_API);

const loginContainer = document.querySelector(".login-container");
const container = document.querySelector(".container");
const wrapper = document.querySelector(".wrapper"),
  signupHeader = document.querySelector(".signup header"),
  loginHeader = document.querySelector(".login header");

loginHeader.addEventListener("click", () => {
  wrapper.classList.add("active");
});
signupHeader.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

//sign in and go back
const signInBtn = document.querySelector(".signin button");
signInBtn.addEventListener("click", (e) => {
  e.preventDefault();
  loginContainer.classList.remove("hidden");
  container.classList.add("hidden");
});

const goBackBtn = document.querySelector(".go-back");
goBackBtn.addEventListener("click", (e) => {
  e.preventDefault();
  loginContainer.classList.add("hidden");
  container.classList.remove("hidden");
});

//check value input
var signupNameEl = document.querySelector(".signup-name"),
  signupEmailEl = document.querySelector(".signup-email"),
  signupPasswordEl = document.querySelector(".signup-password"),
  loginEmailEl = document.querySelector(".login-email"),
  loginPasswordEl = document.querySelector(".login-password"),
  checkEmailEl = document.querySelector(".check-email"),
  checkPasswordEl = document.querySelector(".check-password"),
  checkNameEl = document.querySelector(".check-name");

function checkValueInput() {
  if (signupNameEl.value.length < 1) {
    checkNameEl.innerHTML = "Name không được để trống";
  }
  if (signupEmailEl.value.length < 1) {
    checkEmailEl.innerHTML = "Email không được để trống";
  }
  if (signupPasswordEl.value.length < 1) {
    checkPasswordEl.innerHTML = "Password không được để trống";
  }
}

if (signupNameEl) {
  signupNameEl.addEventListener("input", () => {
    if (signupNameEl.value.length < 1) {
      checkValueInput();
    } else {
      checkNameEl.innerHTML = "";
    }
  });
}
if (signupEmailEl) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  signupEmailEl.addEventListener("input", () => {
    if (!regex.test(signupEmailEl.value)) {
      checkEmailEl.innerHTML = "Email không hợp lệ";
    } else if (signupEmailEl.value.length < 1) {
      checkValueInput();
    } else {
      checkEmailEl.innerHTML = "";
    }
  });
}

if (signupPasswordEl) {
  signupPasswordEl.addEventListener("input", () => {
    if (signupPasswordEl.value.length < 6) {
      checkPasswordEl.innerHTML = "Password phải có ít nhất 6 ký tự";
    } else if (signupPasswordEl.value.length < 1) {
      checkValueInput();
    } else {
      checkPasswordEl.innerHTML = "";
    }
  });
}

// submit login form
const formLoginEl = document.querySelector(".form-login");
formLoginEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = loginEmailEl.value;
  const password = loginPasswordEl.value;
  signIn(email, password);
  loginContainer.classList.add("hidden");
  container.classList.remove("hidden");
  const btnSignIn = container.querySelector(".btn-signin");
  btnSignIn.classList.add("hidden");
  const linkEl = document.querySelector(".link");
  linkEl.classList.remove("hidden");
  const createPost = document.querySelector(".create-post");
  createPost.classList.remove("hidden");
});

// get user
async function getUser() {
  const { data: getUserData } = await client.get(
    "/users/profile",
    localStorage.getItem("access_token")
  );
  const userName = getUserData.data.name;
  const nameEl = document.querySelector(".name-user");
  nameEl.innerHTML = userName;
  console.log(getUserData.data.name);
}

// submit signup form
const formSignupEl = document.querySelector(".form-signup");
formSignupEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = signupEmailEl.value;
  const password = signupPasswordEl.value;
  const name = signupNameEl.value;
  signup(email, password, name);
});

const getBlogs = async (query = {}) => {
  client.setUrl(SERVER_AUTH_API);
  const queryStr = new URLSearchParams(query).toString();
  const { data } = await client.get(`/blogs?${queryStr}`);

  renderBlogs(data);
  return data;
};

// log out btn

getBlogs();

const renderBlogs = (post) => {
  const blogList = document.querySelector(".blog-list");
  blogList.innerHTML = "";
  if (post.length === 0) {
    alert("Không có bài viết nào");
  } else {
    post.data.forEach(({ title, content, userId, createdAt }) => {
      const { name } = userId;
      console.log(name);
      const createTime = new Date(createdAt);
      const createdValue = `${createTime.getDate()} - ${
        createTime.getMonth() + 1
      } - ${createTime.getFullYear()} | ${createTime.getHours()}:${
        createTime.getMinutes() < 10
          ? "0" + createTime.getMinutes()
          : createTime.getMinutes()
      }`;

      const blogItem = document.createElement("div");
      blogItem.classList.add("blog-item");
      blogItem.innerHTML = `
      <div class="blog-item__author d-flex gap-3">
        <span class="rounded-circle bg-success avatar">V</span><p>${name}</p>
      </div>
      <div class="blog-item__title">
        <h3>${title}</h3>
      </div>
      <div class="blog-item__content">
        <p>${content}</p>
      </div>
      <div class="blog-item__created">
        <p>${createdValue}</p>
      </div>
      `;
      //read more
      const readMoreBtn = document.createElement("button");
      readMoreBtn.classList.add("btn", "btn-primary", "read-more");
      readMoreBtn.innerText = "Read more";
      blogItem.append(readMoreBtn);
      blogList.append(blogItem);
    });
  }
};

// sign in
async function signIn(email, password) {
  const { data: tokens } = await client.post("/auth/login", {
    email,
    password,
  });
  if (tokens.data) {
    localStorage.setItem("access_token", tokens.data.accessToken);
    localStorage.setItem("refresh_token", tokens.data.refreshToken);
    getUser();
    getBlogs();
  } else {
    alert("Đăng nhập thất bại");
  }
}

// Sign up
async function signup(email, password, name) {
  const { data: response } = await client.post("/auth/register", {
    email,
    password,
    name,
  });
  if (response.status_code === "SUCCESS") {
    alert(response.message);
    wrapper.classList.add("active");
  } else {
    alert(response.message);
  }
}

// logout

const logoutBtn = document.querySelector(".logout");
logoutBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  const token = localStorage.getItem("access_token");
  console.log(token);
  const { data } = await client.post("/auth/logout", {}, token);
  console.log(data);
  if (data.code === 200) {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
  } else {
    refreshToken().then(async (refresh) => {
      if (refresh.code === 200) {
        const { data } = await client.post(
          "/auth/logout",
          {},
          localStorage.getItem("access_token")
        );
      }
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
    });
  }
});
// refresh token
async function refreshToken() {
  const refreshToken = localStorage.getItem("refresh_token");
  const { data: tokens } = await client.post("/auth/refresh-token", {
    refreshToken,
  });
  if (tokens.code === 200) {
    localStorage.setItem("access_token", tokens.data.token.accessToken);
    localStorage.setItem("refresh_token", tokens.data.token.refreshToken);
    renderBlogs();
  } else {
    alert("Đăng nhập thất bại");
  }
  return tokens;
}

// create a new post
async function createPost(title, content, token) {
  const { data } = await client.post("/blogs", { title, content }, token);
  if (data.code === 200) {
    alert("Đăng bài thành công");
    renderBlogs();
  } else {
    refreshToken().then(async (refresh) => {
      if (refresh.code === 200) {
        renderBlogs();
      } else {
        alert("Đăng nhập thất bại");
      }
    });
  }
}

// submit create post
const formCreatePostEl = document.querySelector(".create-post");
formCreatePostEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.getElementById("1").value;
  const content = document.getElementById("2").value;
  const token = localStorage.getItem("access_token");
  createPost(title, content, token);
  console.log(title, content);
});
