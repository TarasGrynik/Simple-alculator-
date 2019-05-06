let margine = document.getElementById("real-margine"),
lineHeightTop = document.getElementById("lineHeightTop"),
fontSizeTop = document.getElementById("fontSizeTop"),
lineHeightBottom = document.getElementById("lineHeightBottom"),
fontSizeBottom = document.getElementById("fontSizeBottom"),
btn = document.getElementById("btn");

btn.onclick = function (num1, num2, num3, num4, num5) {
  num1 = margine.value;
  num2 = lineHeightTop.value;
  num3 = fontSizeTop.value;
  num4 = lineHeightBottom.value;
  num5 = fontSizeBottom.value;

  realMargine = num1 - ((num2 - num3) / 2) - ((num4 - num5) / 2);

  alert(`Ваш реальний відступ між текстом дорівнює: ${Math.round(realMargine)}!!!`);
};