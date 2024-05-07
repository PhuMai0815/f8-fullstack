var text = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam veritatis quibusdam minus?`;
var position = 0;
var keyword = " ";

setInterval(() => {
  if (position >= text.length) {
    position = 0;
    return;
  }
  var nextSpaceIndex = text.indexOf(keyword, position);
  if (nextSpaceIndex === -1) {
    nextSpaceIndex = text.length;
  }
  var coloredText =
    text.slice(0, position) +
    `<span>${text.slice(position, nextSpaceIndex)}</span>`;
  if (nextSpaceIndex < text.length) {
    coloredText += " ";
  }
  coloredText += text.slice(nextSpaceIndex + 1);

  document.body.innerHTML = coloredText;
  position = nextSpaceIndex + 1;
}, 500);
