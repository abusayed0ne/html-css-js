function MakeBlue() {
  document.body.style.backgroundColor = "blue";
}

const MakeRedButton = document.getElementById("make-red");
MakeRedButton.onclick = makeRed;
function makeRed() {
  document.body.style.backgroundColor = "red";
}

const MakePinkButton = document.getElementById("make-pink");
MakePinkButton.addEventListener("click", makePink);

function makePink() {
  document.body.style.backgroundColor = "pink";
}
const MakeGreenButton = document.getElementById("make-green");
MakeGreenButton.addEventListener("click", function MakeGreen() {
  document.body.style.backgroundColor = "green";
});
