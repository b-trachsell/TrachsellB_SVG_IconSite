// This is a self invoking anonymous function
// Also called an IIFE
// also called a module
// A function with no name

// Lets and then Functions and then Events

(() => {
  console.log(" Clicking the Grey Background has a message appear in the Console, ");
  console.log(" I had a lot of trouble getting the SVGs to be Clickable for some reason ")


  // Finds the button element on the page by its id with javascript
  // Lets your javascript know what the button is
  let allSVGs = document.querySelectorAll(".svg");

// Creates the function to change the text
  

  function logSVG() {
    console.log(this.id);
  }

// Calls the function when the button is clicked
// Usually mouse clicking or Hoveers
  allSVGs.forEach(item => item.addEventListener("click", logSVG));
  allSVGs.forEach(item => console.log(this.id));


})();
