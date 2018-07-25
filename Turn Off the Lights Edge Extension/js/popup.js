// get the buttons by id
let red = document.getElementById('changeToRed');
let blue = document.getElementById('changeToBlue');
let reset = document.getElementById('reset');

var htmlplayer = document.getElementsByTagName("video") || false;

// use tabs.insertCSS to change header color on button click

// red
red.onclick = function() {
  htmlplayer.currentTime += 10;;
};

// blue
blue.onclick = function() {
  browser.tabs.insertCSS({code: ".c-uhfh .brand-neutral { background: blue !important; }"});
};

// back to original
reset.onclick = function() {
  browser.tabs.insertCSS({code: ".c-uhfh .brand-neutral { background: #2f2f2f !important; }"});
};