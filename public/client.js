// show the input field item on page
var input = document.querySelector('input[name="name"]');
var output = document.querySelector('.name');

// TextToSVG stuff
var TextToSVG = require('text-to-svg');
var textToSVG = TextToSVG.load("", (err, t2s) => {
  textToSVG = t2s;
});
var textOptions = {fontSize: 70};

// load font


  
input.oninput = function(event){
  // add text above input field
  var newText = event.target.value;
  output.textContent = newText;
  
  // attempt to convert text to svg
  var textToSVG = textToSVG.getSVVG(newText, textOptions);
  console.log(textToSVG);  
}