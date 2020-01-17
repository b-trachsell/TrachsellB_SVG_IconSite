// This is a self invoking anonymous function
// Also called an IIFE
// also called a module
// A function with no name

// Lets and then Functions and then Events

(() => {
  console.log(" Some Message ");


  // Finds the button element on the page by its id with javascript
  // Lets your javascript know what the button is
  let theHeading = document.querySelector('h1'),
      allSVGs = document.querySelectorAll(".svg");

// Creates the function to change the text
  function changeText() {
    theHeading.textContent = "hello world";
  }

  function logSVG() {
    console.log(this.id);
  }

// Calls the function when the button is clicked
// Usually mouse clicking or Hoveers
  allSVGs.forEach(item => item.addEventListener("click", logSVG));


})();
