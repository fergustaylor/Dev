var checklistcontainer = document.getElementById('checklist');
var classlistcontainer = document.getElementById('classlist');
// Create a new XMLHttpRequest.
var request = new XMLHttpRequest();
// Handle state changes for the request.
request.onreadystatechange = function(response) {
  if (request.readyState === 4) {
    if (request.status === 200) {
      // Parse the JSON
      var jsonOptions = JSON.parse(request.responseText);
      // Loop over the JSON array.
     jsonOptions.forEach(function(item) {
        // Create a new <span> element.
        var span = document.createElement('span')

        // Create a new <input> element.
        var inputs = document.createElement('input')
        inputs.setAttribute("type", "checkbox")
        inputs.setAttribute("value", item.drug)
        inputs.setAttribute("class", item.class)

        //add event listener to input (to cancel out double-effect by clicking on span)
        inputs.addEventListener("click", function(){
        state = this.checked;
        state = !state;
        this.checked = state;
        });

        // Set the value using the item in the JSON array.
        var checklists = document.createElement('p')
        var checklists5 = document.createTextNode(item.drug)
        checklists.appendChild(checklists5)

        //add a break
        var breaks = document.createElement('br')

        // Add the <input> element to the <span>.
        span.appendChild(inputs);
        // Add the <p> element to the <span>.
        span.appendChild(checklists);

        //add event listener to span
        span.addEventListener("click", function(){
        state = this.firstChild.checked;
        state = !state;
        this.firstChild.checked = state;
        });

        //add span to checklistcontainer
        checklistcontainer.appendChild(span);
      });

      //hide loading div
      var x = document.getElementsByClassName("loading");
      x[0].style.display = "none";

      // Make class
      var classes = [];
      $('div#checklist>span>input').each(function() {
            classes.push($(this).attr('class'));
      });
      classes = Array.from(new Set(classes));
      // for each value in Classes
      classes.forEach(function(item) {
        var span = document.createElement('span')

        // Create a new <input> element.
        var inputs = document.createElement('input')
        inputs.setAttribute("type", "checkbox")
        inputs.setAttribute("value", item)

        //add event listener to input (to cancel out double-effect by clicking on span)
        inputs.addEventListener("click", function(){
        //state = this.checked;
        //state = !state;
        //this.checked = state;
        //rolling into one function
          if (this.checked) {
            //check the drugs of that class
            var classcheckboxes = $('div#checklist>span>input.'+this.value);
            for (i = 0; i < classcheckboxes.length; i++) {
              classcheckboxes[i].checked = true;
            }
          } else {
            var classcheckboxes = $('div#checklist>span>input.'+this.value);
            for (i = 0; i < classcheckboxes.length; i++) {
              classcheckboxes[i].checked = false;
            }
          }
        });

        // Set the value using the item in the JSON array.
        var checklists = document.createElement('p')
        var checklists5 = document.createTextNode(item)
        checklists.appendChild(checklists5)

        //add a break
        var breaks = document.createElement('br')

        // Add the <input> element to the <span>.
        span.appendChild(inputs);
        // Add the <p> element to the <span>.
        span.appendChild(checklists);

        //add event listener to span
        span.addEventListener("click", function(){
        state = this.firstChild.checked;
        state = !state;
        this.firstChild.checked = state;
        //rolling into one function.
          if (this.firstChild.checked) {
            //check the drugs of that class
            var classcheckboxes = $('div#checklist>span>input.'+this.value);
            for (i = 0; i < classcheckboxes.length; i++) {
              classcheckboxes[i].checked = true;
            }
          } else {
            var classcheckboxes = $('div#checklist>span>input.'+this.value);
            for (i = 0; i < classcheckboxes.length; i++) {
              classcheckboxes[i].checked = false;
            }
          }
        });

        //add span to checklistcontainer
        classlistcontainer.appendChild(span);
      });
      //make classlist display:none
      var all = $('div#classlist>span')
      for (i = 0; i < all.length; i++) {
        all[i].style.display = 'none';
      }
    }
  }
};

// Set up and make the request.
request.open('GET', 'https://fergustaylor.github.io/Dev/50%20Drugs/drugs.json', true);
request.send();

//functions for the radio buttons
function showdrugs() {
  //hide classes
  var all = $('div#classlist>span')
  for (i = 0; i < all.length; i++) {
    all[i].style.display = 'none';
  }
  //show drugs
  var all = $('div#checklist>span')
  for (i = 0; i < all.length; i++) {
    all[i].style.display = 'block';
  }
}

function showclasses() {
  //hide all drugs
  var all = $('div#checklist>span')
  for (i = 0; i < all.length; i++) {
    all[i].style.display = 'none';
  }
  //show classes
  var all = $('div#classlist>span')
  for (i = 0; i < all.length; i++) {
    all[i].style.display = 'block';
  }
}

function showsearched(string) {
  //change radio to 'show drugs'
  $('body > form > input[type="radio"]:nth-child(1)')[0].checked = true;
  $('body > form > input[type="radio"]:nth-child(2)')[0].checked = false;
  showdrugs();

  var all = $('div#checklist>span')
  //loop through all
  for (i = 0; i < all.length; i++) {
    all[i].style.display = 'none';
  }
  var searched = $("div#checklist>span:contains("+string+")")
  //loop through searched
  for (i = 0; i < searched.length; i++) {
    searched[i].style.display = 'block';
  }
  //search by capitalised version
  var string2 = string.charAt(0).toUpperCase()+string.slice(1);
  var searched2 = $("div#checklist>span:contains("+string2+")")
  //loop through searched
  for (i = 0; i < searched2.length; i++) {
    searched2[i].style.display = 'block';
  }
}

var druginputarray = [];

function describeall() {
//remove everything from body apart from index.js.
$("body *").not("body script").remove();
//add new div
var infocontainer = document.createElement('div');
infocontainer.setAttribute("id", "infocontainer")
document.body.appendChild(infocontainer);
var infocontainer = document.getElementById('infocontainer');

//write all of them in.
var jsonOptions = JSON.parse(request.responseText);

jsonOptions.forEach(function(item) {
// Create a new <span> element.
var span = document.createElement('span');

var checklists = document.createElement('p');
checklists.setAttribute("class", "title");
var checklists5 = document.createTextNode(item.drug);
checklists.appendChild(checklists5);

span.appendChild(checklists);

var breaks = document.createElement('br')

var example = document.createElement('p');
example.setAttribute("class", "example")
var example5 = document.createTextNode("Example(s) of drugs: "+item["Example(s) of drugs:"]);
example.appendChild(example5);
span.appendChild(example);

var pcpk = document.createElement('p');
pcpk.setAttribute("class", "pcpk")
var pcpk5 = document.createTextNode("Important PK/PD: "+item["Important pharmacokinetics / pharmacodynamics:"]);
pcpk.appendChild(pcpk5);
span.appendChild(pcpk);

var indication = document.createElement('p');
indication.setAttribute("class", "indication")
var indication5 = document.createTextNode("Indication(s): "+item["Indication(s):"]);
indication.appendChild(indication5);
span.appendChild(indication);

var moa = document.createElement('p');
moa.setAttribute("class", "moa")
var moa5 = document.createTextNode("Mechanism of action: "+item["Mechanism of action:"]);
moa.appendChild(moa5);
span.appendChild(moa);

var patientinfo = document.createElement('p');
patientinfo.setAttribute("class", "patientinfo")
var patientinfo5 = document.createTextNode("Patient information: "+item["Patient information:"]);
patientinfo.appendChild(patientinfo5);
span.appendChild(patientinfo);

var sideeffects = document.createElement('p');
sideeffects.setAttribute("class", "sideeffects")
var sideeffects5 = document.createTextNode("Side effects: "+item["Side effects:"]);
sideeffects.appendChild(sideeffects5);
span.appendChild(sideeffects);

var classinfo = document.createElement('p');
classinfo.setAttribute("class", "classinfo")
var classinfo5 = document.createTextNode("Drug class: "+item.class);
classinfo.appendChild(classinfo5);
span.appendChild(classinfo);

if (item["Other information:"] > 0) {
  var otherinfo = document.createElement('p');
  otherinfo.setAttribute("class", "otherinfo")
  var otherinfo5 = document.createTextNode("Other information: "+item["Other information:"]);
  otherinfo.appendChild(otherinfo5);
  span.appendChild(otherinfo);
}

infocontainer.appendChild(span);
//////
});
}

function describeselected() {
  //code to write only the selected
  var selected = $('div#checklist>span>input:checked');
  //create array
  for (i = 0; i < selected.length; i++) {
    druginputarray.push(selected[i].value);
  }
  //describe(druginputarray);
  $("body *").not("body script").remove();
  //add new div
  var infocontainer = document.createElement('div');
  infocontainer.setAttribute("id", "infocontainer")
  document.body.appendChild(infocontainer);
  var infocontainer = document.getElementById('infocontainer');

//add the example
      var span = document.createElement('span');

      var checklists = document.createElement('p');
      checklists.setAttribute("class", "title examplename");
      //add css
      var checklists5 = document.createTextNode("Drug Name");
      checklists.appendChild(checklists5);

      span.appendChild(checklists);

      var breaks = document.createElement('br')

      var example = document.createElement('p');
      example.setAttribute("class", "example")
      var example5 = document.createTextNode("Example(s) of drugs: .. ");
      example.appendChild(example5);
      span.appendChild(example);

      var pcpk = document.createElement('p');
      pcpk.setAttribute("class", "pcpk")
      var pcpk5 = document.createTextNode("Important PK/PD: .. ");
      pcpk.appendChild(pcpk5);
      span.appendChild(pcpk);

      var indication = document.createElement('p');
      indication.setAttribute("class", "indication")
      var indication5 = document.createTextNode("Indication(s): .. ");
      indication.appendChild(indication5);
      span.appendChild(indication);

      var moa = document.createElement('p');
      moa.setAttribute("class", "moa")
      var moa5 = document.createTextNode("Mechanism of action: .. ");
      moa.appendChild(moa5);
      span.appendChild(moa);

      var patientinfo = document.createElement('p');
      patientinfo.setAttribute("class", "patientinfo")
      var patientinfo5 = document.createTextNode("Patient information: .. ");
      patientinfo.appendChild(patientinfo5);
      span.appendChild(patientinfo);

      var sideeffects = document.createElement('p');
      sideeffects.setAttribute("class", "sideeffects")
      var sideeffects5 = document.createTextNode("Side effects: .. ");
      sideeffects.appendChild(sideeffects5);
      span.appendChild(sideeffects);

      var classinfo = document.createElement('p');
      classinfo.setAttribute("class", "classinfo")
      var classinfo5 = document.createTextNode("Drug class: .. ");
      classinfo.appendChild(classinfo5);
      span.appendChild(classinfo);

      var otherinfo = document.createElement('p');
        otherinfo.setAttribute("class", "otherinfo")
        var otherinfo5 = document.createTextNode("Other information: .. ");
        otherinfo.appendChild(otherinfo5);
        span.appendChild(otherinfo);

      infocontainer.appendChild(span);
//

  //write all of them in.
  var jsonOptions = JSON.parse(request.responseText);

  jsonOptions.forEach(function(item) {
    if (druginputarray.includes(item.drug)) {

      // Create a new <span> element.
      var span = document.createElement('span');

      var checklists = document.createElement('p');
      checklists.setAttribute("class", "title");
      var checklists5 = document.createTextNode(item.drug);
      checklists.appendChild(checklists5);

      span.appendChild(checklists);

      var breaks = document.createElement('br')

      var example = document.createElement('p');
      example.setAttribute("class", "example")
      var example5 = document.createTextNode("Example(s) of drugs: "+item["Example(s) of drugs:"]);
      example.appendChild(example5);
      span.appendChild(example);

      var pcpk = document.createElement('p');
      pcpk.setAttribute("class", "pcpk")
      var pcpk5 = document.createTextNode("Important PK/PD: "+item["Important pharmacokinetics / pharmacodynamics:"]);
      pcpk.appendChild(pcpk5);
      span.appendChild(pcpk);

      var indication = document.createElement('p');
      indication.setAttribute("class", "indication")
      var indication5 = document.createTextNode("Indication(s): "+item["Indication(s):"]);
      indication.appendChild(indication5);
      span.appendChild(indication);

      var moa = document.createElement('p');
      moa.setAttribute("class", "moa")
      var moa5 = document.createTextNode("Mechanism of action: "+item["Mechanism of action:"]);
      moa.appendChild(moa5);
      span.appendChild(moa);

      var patientinfo = document.createElement('p');
      patientinfo.setAttribute("class", "patientinfo")
      var patientinfo5 = document.createTextNode("Patient information: "+item["Patient information:"]);
      patientinfo.appendChild(patientinfo5);
      span.appendChild(patientinfo);

      var sideeffects = document.createElement('p');
      sideeffects.setAttribute("class", "sideeffects")
      var sideeffects5 = document.createTextNode("Side effects: "+item["Side effects:"]);
      sideeffects.appendChild(sideeffects5);
      span.appendChild(sideeffects);

      var classinfo = document.createElement('p');
      classinfo.setAttribute("class", "classinfo")
      var classinfo5 = document.createTextNode("Drug class: "+item.class);
      classinfo.appendChild(classinfo5);
      span.appendChild(classinfo);

      if (item["Other information:"] > 0) {
        var otherinfo = document.createElement('p');
        otherinfo.setAttribute("class", "otherinfo")
        var otherinfo5 = document.createTextNode("Other information: "+item["Other information:"]);
        otherinfo.appendChild(otherinfo5);
        span.appendChild(otherinfo);
      }

      infocontainer.appendChild(span);
    }
    });
}
