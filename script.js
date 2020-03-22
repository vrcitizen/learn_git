var color1 = document.querySelector("#col1");
var color2 = document.querySelector("#col2");
var css = document.querySelector("h3");
var body = document.querySelector("#gradient");

function setGradient(){
	body.style.background = "linear-gradient(to right, " + color1.value +", " + color2.value + ")";
	css.textContent = body.style.background;
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
