// change font size using window onload event
// generic AJAX function to load fromFile into object with ID whereTo (TP#6)
function loadFileInto(fromFile, whereTo) {

	// creating a new XMLHttpRequest object
	ajax = new XMLHttpRequest();

	// defines the GET/POST method, source, and async value of the AJAX object
	ajax.open("GET", fromFile, true);

	// prepares code to do something in response to the AJAX request
	ajax.onreadystatechange = function() {
		
			if ((this.readyState == 4) && (this.status == 200)) {
				document.getElementById(whereTo).innerHTML = this.responseText;
				
			} else if ((this.readyState == 4) && (this.status != 200)) {
				console.log("Error: " + this.responseText);
				
			}
		
	} // end ajax.onreadystatechange

	// now that everything is set, initiate request
	ajax.send();

}

window.onload = function() {
	
	loadFileInto("ingredients.html", "ingredients");
	
	loadFileInto("equipment.html", "equipment");
	
	loadFileInto("directions.html", "directions");
	
  
  // target the headline
  x = document.getElementById("headline");
  // add CSS style for headline size
  x.classList.add("biggerHeadline");

  // -------------------------------------------------
  // set an event function to trigger when the headline is clicked
  // background and text color change in CSS
  x.onclick = function () {
    x.classList.toggle("clicked");
  };

  // -------------------------------------------------
  // set section lists as hidden with onclick event

  // target the ingredients list
  ListIng = document.querySelector("#ingredients");

  ListIng.classList.add("ing");
  
  ListIng.onclick = function () {
    ListIng.classList.toggle("ing");
  };
  
  // target the equipment list
  ListKit = document.querySelector("#equipment")
  
  ListKit.classList.add("kit");
  
  ListKit.onclick = function() {
    ListKit.classList.toggle("kit");
  };
  
  // target the directions list
  ListDir = document.querySelector("#directions")
  
  ListDir.classList.add("dir");
  
  ListDir.onclick = function() {
    ListDir.classList.toggle("dir");
  };

// -------------------------------------------------

// create new content tag using JS only
e = document.createElement("p");

// insert new text
e.innerHTML = "Prep: 20 mins | Cook: 20 mins | Total: 30 mins | Servings: 8";

// center and style text
e.style.textAlign = "center";
e.style.fontSize = "22px";

//  target the img for positioning
z = document.getElementById("steakpic");

// position p tag above photo
document.body.insertBefore(e, z);
  
  
};

