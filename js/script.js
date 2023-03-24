function init(){
//add your javascrip between these two lines of code
// Write JavaScript code to do the following things based on the demos we did in class.
// a. Add an event listener to the Alert Me div so that when it is clicked it will run some code.
// b. When the button is clicked it should do two things.
// c. (1) It should show an Alert box with the contents of the text field in the Alert box. I want you to also append 
// your name and a colon
// (name:) before the value of the text box. For example if the text box says This is a test, I would have the Alert 
// say Daniel Krieglstein: This is a test
// d. (2) Also it should change the value of the h2 below the button to have the text contents of the text input 
// control. Do not append your name
// to this one. Just have the exact contents of the text box.
// e. I will show an example of this behavior in class in a final version of the lab.
  var button = document.getElementById('entrybutton');

  function showText() {
    var textbox = document.getElementById('entryinput');
    document.getElementById('textoutput').innerHTML = textbox.value;
    alert("Zealous Godwin: " + textbox.value);
}
  button.addEventListener('onclick', showText);
}
window.addEventListener('load', init);