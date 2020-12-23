"use strict";

// Get Piano Keys:
const keys = document.querySelectorAll(".key");
//console.log(keys); // node list

// Add click event for all elements that have the key class. We could also use the array's "for each" method.

const playNote = function (event) {
  // Get data-key for identify which key was pressed:
  let keyCode;
  if (event.type === "click") {
    keyCode = event.target.dataset.key;
  } else if (event.type === "keydown") {
    keyCode = event.keyCode;
  }

  // check if key pressed is on keyboard:
  const keyBoard = document.querySelector(`.key[data-key="${keyCode}" ]`);
  const isPianoKey = keyBoard ? true : false;
  if (!isPianoKey) {
    return;
  } else {
    console.log(keyCode);
  }
};

for (let i = 0; i < keys.length; i++) {
  keys[i].addEventListener("click", playNote);
}

// Calls the function when the key was pressed
window.addEventListener("keydown", playNote);
