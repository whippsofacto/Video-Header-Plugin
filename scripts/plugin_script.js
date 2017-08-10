console.log("hello world from the video headers plugin");

//add the html to the header on plugin activation


/*
//create header var
var getHeader = document.getElementById('#masthead');
//create a <div>
var newDiv = document.createElement('div');
//create a <p> tag
var newPara = document.createElement('p');
//create some text
var newText = document.createTextNode('Hello from the Plugin!');
// find the position where the new elements should be added
getHeader.appendChild(newDiv);
*/

var header = document.getElementsByTagName('header')[0];


  if (typeof header !== 'undefined') {
  console.log("Yo mo fo!")
  console.log(header.innerHTML);
 } else {
   console.log("No tags of that name here!");
 }
