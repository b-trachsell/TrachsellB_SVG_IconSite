// This is a self invoking anonymous function
// Also called an IIFE
// also called a module
// A function with no name

(() => {
  console.log(" Some Message ");


  // Finds the button element on the page by its id with javascript
  // Lets your javascript know what the button is
  let theButton = document.querySelector("#myButton");



// Creates the function to change the text
  function changeText() {
    document.querySelector('h1').textContent = "hello world";
  }

// Calls the function when the button is clicked
  theButton.addEventListener("click", changeText);


})();
