"use strict";

// Get Piano Keys:
const keys = document.querySelectorAll(".key");
//console.log(keys); // node list

// Add click event for all elements that have the key class. We could also use the array's "for each" method.

const playNote = function (event) {
  console.log(event.type);
};

for (let i = 0; i < keys.length; i++) {
  keys[i].addEventListener("click", playNote);
}

// Calls the function when the key was pressed
window.addEventListener("keydown", playNote);
