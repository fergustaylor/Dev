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
		//console.log(documentHeight);
}

function resizerepeat(event) {
		resize;
		setTimeout(resize, 2000);
}

window.onresize = resizerepeat;
window.onclick = resizerepeat;
window.oninput = resizerepeat;
window.onchange = resizerepeat;
window.onsubmit = resizerepeat;
window.onkeyup = resizerepeat;