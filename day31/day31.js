var progressBar = document.querySelector(".progress-bar");
var progress = progressBar.querySelector(".progress");
var progressSpan = document.querySelector(".dot");
var currentTimeEl = progressBar.previousElementSibling;

var handleUpdateValue = function (value) {
  progress.style.width = `${value}%`;
};

var progressBarWidth = progressBar.clientWidth;
var isDrag = false;
var initialClientX;
var initialValue = 0;
var value;
var timeNowvalue;

progressBar.addEventListener("mousedown", function (e) {
  if (e.which === 1) {
    var offsetX = e.offsetX;
    value = (offsetX * 100) / progressBarWidth;
    var currentTimeClick = (value / 100) * audio.duration;
    audio.currentTime = currentTimeClick;
    initialValue = value;
    initialClientX = e.clientX;
    isDrag = true;
    handleUpdateValue(value);
  }
});

progressSpan.addEventListener("mousedown", function (e) {
  e.stopPropagation();
  if (e.which === 1) {
    isDrag = true;
    initialClientX = e.clientX;
  }
});

document.addEventListener("mousemove", function (e) {
  if (isDrag) {
    var moveWidth = e.clientX - initialClientX;
    value = (moveWidth * 100) / progressBarWidth;
    value = initialValue + value;

    currentTimeEl.innerText = getTime((audio.duration * value) / 100);

    if (value < 0) {
      value = 0;
    }

    if (value > 100) {
      value = 100;
    }

    handleUpdateValue(value);
  }
});

document.addEventListener("mouseup", function () {
  isDrag = false;
  initialValue = value;

  audio.currentTime = (value / 100) * audio.duration;

  currentTimeEl.innerText = getTime((audio.duration * value) / 100);
});

var audio = document.querySelector(".audio");
var totalTime = audio.duration;

var durationEl = progressBar.nextElementSibling;

var playBtn = document.querySelector(".play-btn");

var pauseBtnIcon = `<i class="fa-solid fa-pause"></i>`;

var playBtnIcon = `<i class="fa-solid fa-play"></i>`;

var getTime = function (seconds) {
  var mins = Math.floor(seconds / 60);
  seconds -= mins * 60;
  seconds = Math.floor(seconds);

  return `${mins < 10 ? `0${mins}` : mins}:${
    seconds < 10 ? `0${seconds}` : seconds
  }`;
};

audio.addEventListener("loadeddata", function () {
  durationEl.innerText = getTime(audio.duration);
});

playBtn.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
    this.innerHTML = pauseBtnIcon;
  } else {
    audio.pause();
    this.innerHTML = playBtnIcon;
  }
});

audio.addEventListener("timeupdate", function () {
  // console.log("Đang chạy");
  currentTimeEl.innerText = getTime(audio.currentTime);

  value = (audio.currentTime * 100) / audio.duration;

  handleUpdateValue(value);
});

// hover

var time_hover = document.querySelector(".time-hover");
progress.style.display = "flex";
time_hover.style.display = "none";

progressBar.addEventListener("mousemove", function (e) {
  value = (e.offsetX / progressBarWidth) * 100;
  time_hover.style.display = "block";
  time_hover.style.left = `${value}%`;
  time_hover.innerHTML = getTime((audio.duration * value) / 100);
});
progressBar.addEventListener("mouseout", function () {
  time_hover.style.display = "none";
});
progressSpan.addEventListener("mousemove", function (e) {
  e.stopPropagation();
});

audio.addEventListener("ended", function () {
  value = 0;
  audio.currentTime = 0;
  handleUpdateValue(value);
  playBtn.innerHTML = playBtnIcon;
});
