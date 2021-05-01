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