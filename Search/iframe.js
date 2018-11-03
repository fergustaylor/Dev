//Thanks to https://bitsofco.de/iframe-responsive/
var documentHeight = document.querySelector("div#main").scrollHeight;
// Add some unique identifier to the string being passed
var message = 'documentHeight:'+documentHeight;
// Pass message to (any) parent document
parent.postMessage(message, "*");
// On resize of the window, recalculate the height of the main element, 
// and pass to the parent document again
function resize(event) {
	  documentHeight = document.querySelector("div#main").scrollHeight;
  	message = 'documentHeight:'+documentHeight;
		parent.postMessage(message,"*");
		console.log(documentHeight);
}
//window.onresize = resize;
//window.onclick = resize;
//window.oninput = resize;
//window.onchange = resize;
//window.onsubmit = resize;
//window.onkeyup = resize;
//window.onkeyup = setTimeout(resize, 3000);
//window.onclick = setTimeout(resize, 3000);
//window.oninput = setTimeout(resize, 3000);
//window.onsubmit = setTimeout(resize, 3000);

function function1(event) {
	  documentHeight = document.querySelector("div#main").scrollHeight;
		console.log(documentHeight+" onresize");
}
function function2(event) {
	  documentHeight = document.querySelector("div#main").scrollHeight;
		console.log(documentHeight+" onclick");
}
function function3(event) {
	  documentHeight = document.querySelector("div#main").scrollHeight;
		console.log(documentHeight+" oninput");
}
function function4(event) {
	  documentHeight = document.querySelector("div#main").scrollHeight;
		console.log(documentHeight+" onchange");
}
function function5(event) {
	  documentHeight = document.querySelector("div#main").scrollHeight;
		console.log(documentHeight+" onsubmit");
}
function function6(event) {
	  documentHeight = document.querySelector("div#main").scrollHeight;
		console.log(documentHeight+" onkeyup");
}

window.onresize = function1;
window.onclick = function2;
window.oninput = function3;
window.onchange = function4;
window.onsubmit = function5;
window.onkeyup = function6;