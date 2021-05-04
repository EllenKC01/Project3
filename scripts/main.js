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
// only issue here is the function only works after the user has clicked a state- otherwise the button goes nowhere
let map = document.querySelectorAll("h3");

function backToMap(e) {
    console.log(e.target.dataset.name);
    window.location.hash = e.target.dataset.name
}

map.forEach((back) => {
    back.addEventListener("click", backToMap)
});


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
