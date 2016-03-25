var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute ('src','images/map-expo-line_rev.jpg');
    } else {
      myImage.setAttribute ('src','images/map-expo-line-phase2.jpg');
    }
}
var myButton = document.querySelector('button');

var myHeadingA = document.querySelector('h1');

var myHeadingB = document.querySelector('h2');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeadingA.textContent = 'Are you ready for a perfect Sunday, ' + myName + "?";
  myHeadingB.textContent = "Here we go!";
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeadingA.textContent = 'Are you ready for a perfect Sunday, ' + storedName + "?";
  myHeadingB.textContent = "Here we go!";
}