// Create a new <span> element.
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