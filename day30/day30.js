const button = document.getElementById("speakButton");
const status = document.getElementById("status");

// Kiểm tra hỗ trợ Web Speech API
if ("webkitSpeechRecognition" in window) {
  const recognition = new webkitSpeechRecognition();
  recognition.lang = "vi-VN";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    window.location.href = `https://www.google.com/search?q=${encodeURIComponent(
      transcript
    )}`;
  };

  recognition.onerror = (event) => {
    status.textContent = `Lỗi: ${event.error}`;
  };

  button.addEventListener("click", () => {
    status.textContent = "Đang lắng nghe...";
    recognition.start();
  });
} else {
  status.textContent = "Trình duyệt của bạn không hỗ trợ Web Speech API.";
}
