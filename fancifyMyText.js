const biggerButton = document.getElementById("bigButton");
const fancyRadio = document.getElementById("fancy");
const boringRadio = document.getElementById("boring");
const mooRadio = document.getElementById("moo");
const textArea = document.getElementById("textArea");

function alertNow() {
  alert("Hello, Box!");
}

biggerButton.addEventListener("click", () => {
  textArea.style.fontSize = "24px";
});

fancyRadio.onchange = () => {
  textArea.style.fontWeight = "bold";
  textArea.style.color = "blue";
  textArea.style.textDecoration = "underline";
};

boringRadio.onchange = () => {
  textArea.style.fontWeight = "normal";
  textArea.style.color = "black";
  textArea.style.textDecoration = "none";
};

mooRadio.onchange = () => {
  textArea.style.textTransform = "uppercase";
  let textString = textArea.value;
  let parts = textString.split(".");
  textString = parts.join("-Moo");
  textArea.value = textString;
};
