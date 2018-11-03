// Setup event listener
var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
var eventer = window[eventMethod];
var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

// Listen for event
eventer(messageEvent,function(e) {

  // Check that message being passed is the documentHeight
  if (  (typeof e.data === 'string') && (e.data.indexOf('documentHeight:') > -1) ) {
    
    // Split string from identifier
    var height = e.data.split('documentHeight:')[1];
    height = parseInt(height) + 30; // add a bit of extra space as buffer

// Change height of <iframe> element
document.getElementById('iframe').height = height + 'px';

  } 
},false);