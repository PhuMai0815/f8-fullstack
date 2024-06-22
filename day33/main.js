var progressBar = document.querySelector(".progress-bar");
var progress = document.querySelector(".progress");
var progressDot = progress.querySelector(".progress-bar .progress span");
var widthProgressBar = progressBar.clientWidth;
var initialClientX = 0;
var isDrag = false;
var initialRate = 0;
var rate = 0;
var currentTime = 0;

var handleChange = function (value) {
  currentTime = (audio.duration * value) / 100;
  if (!isDrag) {
    audio.currentTime = currentTime;
  }
};

progressBar.addEventListener("mousedown", function (e) {
  var rate = (e.offsetX * 100) / widthProgressBar;
  handleChange(rate);
  progress.style.width = `${rate}%`;
  initialRate = rate;
  audio.currentTime = currentTime;
  isDrag = true;
  initialClientX = e.clientX;
});

progressDot.addEventListener("mousedown", function (e) {
  e.stopPropagation();
  isDrag = true;
  initialClientX = e.clientX;
});

document.addEventListener("mousemove", function (e) {
  if (isDrag) {
    var space = e.clientX - initialClientX;
    rate = (space * 100) / widthProgressBar + initialRate;
    if (rate < 0) {
      rate = 0;
    }
    if (rate > 100) {
      rate = 100;
    }

    progress.style.width = `${rate}%`;
    handleChange(rate);
    audio.currentTime = currentTime;
  }
});

document.addEventListener("mouseup", function (e) {
  isDrag = false;
  initialRate = rate;
  audio.currentTime = currentTime;
});

var audio = document.querySelector(".audio");
var currentTimeEl = progressBar.previousElementSibling;
var durationTimeEl = progressBar.nextElementSibling;
var playBtn = document.querySelector(".play-btn");

var playIcon = `<i class="fa-solid fa-play"></i>`;
var pauseIcon = `<i class="fa-solid fa-pause"></i>`;

var getTime = function (seconds) {
  var mins = Math.floor(seconds / 60);
  seconds = Math.floor(seconds - mins * 60);
  return `${mins < 10 ? "0" + mins : mins}:${
    seconds < 10 ? "0" + seconds : seconds
  }`;
};

audio.addEventListener("loadeddata", function () {
  durationTimeEl.innerText = getTime(audio.duration);
});

playBtn.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
    this.innerHTML = pauseIcon;
  } else {
    audio.pause();
    this.innerHTML = playIcon;
  }
});

audio.addEventListener("timeupdate", function () {
  if (!isDrag) {
    currentTimeEl.innerText = getTime(this.currentTime);
    rate = (this.currentTime / this.duration) * 100;
    progress.style.width = `${rate}%`;
  }

  currentTime = this.currentTime;
  handleKaraoke(currentTime);
});

var timer = progressBar.querySelector(".timer");

progressBar.addEventListener("mousemove", function (e) {
  timer.style.left = `${e.offsetX}px`;
  var rateTimer = (e.offsetX * 100) / widthProgressBar;
  var rate = (audio.duration * rateTimer) / 100;
  timer.innerText = getTime(rate);
});

audio.addEventListener("ended", function () {
  rate = 0;
  currentTime = 0;
  audio.currentTime = 0;
  pro;
});
