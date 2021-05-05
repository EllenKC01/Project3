// get what we need
let states = document.querySelectorAll("path");

// what happens when state is clicked
function handleStateClick(e) {
    console.log(e.target.dataset.name);
    window.location.hash = e.target.dataset.name
}

// wire it up
states.forEach((state) => {
    state.addEventListener("click", handleStateClick)
});

// bring user back to map from state <div>s
// find all h3 elements
let map = document.querySelectorAll("h3");

// function takes user back to top
function backToMap(e) {
    window.scrollTo(0, 0);
}

// listen for "back to map" buttons to be clicked
map.forEach((back) => {
    back.addEventListener("click", backToMap)
});

// state dropdown menu
let selects = document.querySelectorAll("option");

// takes user to state section
function navigateToState(e) {
    console.log(e.target.value);
}

// listen for when selection from dropdown is changed
selects.forEach((option) => {
    option.addEventListener("change", navigateToState)
});

// take user to nps site when button is clicked
document.getElementById("nps").onclick = function () {
  location.href = "https://www.nps.gov/index.htm";
};


// create a function to open accordion panels when park name is clicked

var acc = document.getElementsByClassName("park");
var i;
// assuming this method is necessary because we are using class names, not element names
// for each of these elements, listen for a click
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
    // if park is clicked, its panel is set to active
      this.classList.toggle("active");

    // for the active panel- if it is visible, close it; if not, open it
      var description = this.nextElementSibling;
      if (description.style.display === "block") {
        description.style.display = "none";
      } else {
        description.style.display = "block";
      }
  });
}
