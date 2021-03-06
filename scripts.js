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
};

// object contructor for Recipe prototype
function Recipe(recipeName, imageURL, contributorName, ingredientsFilename, equipmentFilename, directionsFilename) {
  this.name = recipeName;
  this.imgsrc = imageURL
  this.contributor = contributorName;
  this.ingFile = ingredientsFilename;
  this.equipFile = equipmentFilename;
  this.dirFile = directionsFilename;
  
  // update the screen with this object's recipe information
  this.displayRecipe = function() {
    
    // update the recipe title
    document.querySelector("#titleBanner h1").innerHTML = this.name;
    
    // update the recipe contributor
    document.querySelector("#titleBanner h3").innerHTML = "Contributed by:" + this.contributor;
    
    // update teh image
    document.querySelector("#titleBanner").style.backgroundImage = "url(" + this.imgsrc + ")";
    
    // update the three columns of information 
    loadFileInto(this.ingFile, "ingredients");
    loadFileInto(this.ingFile, "equipment");
    loadFileInto(this.ingFile, "directions");

    
  }
  
  
}

SirloinSteakwithGarlicButter = new Recipe(
  "Sirloin Steak with Garlic Butter", 
  "https://images.unsplash.com/photo-1579366948929-444eb79881eb?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1400&q=80",
  "Emily Aumell",
  "ingredients.html",
  "equipment.html",
  "directions.html"
);

CheesyBuffaloChickenDip = new Recipe(
  "Cheesy Buffalo Chicken Dip",
  "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F2143192.jpg&w=596&h=596&c=sc&poi=face&q=85",
  "Edison Soliman",
  "cheesyIng.html",
  "cheesyEquip.html",
  "cheesyDir.html"
);

WorldsBestLasagna = new Recipe(
  "Worlds Best Lasagna",
  "https://cdn.pixabay.com/photo/2017/02/15/15/17/meal-2069021_1280.jpg",
  "Madison Roby",
  "lasagIng.html",
  "lasagEquip.html",
  "lasagDir.html"
);


window.onload = function() {

  // target the headline
  x = document.getElementById("titleBanner");
  
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

