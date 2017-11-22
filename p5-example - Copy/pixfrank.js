

var cellsize = 2; // Dimensions of each cell in the grid
var cols; 
var rows;   // Number of columns and rows in our system



function preload(){
img2 = loadImage("electfrank.jpg");
}

function setup() {
  createCanvas(700, 600, WEBGL); 
 

  cols = img2.width/cellsize;             // Calculate # of columns
  rows = img2.height/cellsize;            // Calculate # of rows
}

function draw() {
  background(0);
  
  // Begin loop for columns
  for ( var i = 0; i < cols; i++) {
    // Begin loop for rows
    for ( var j = 0; j < rows; j++) {
      var x = i* cellsize + cellsize/2; // x position
      var y = j* cellsize + cellsize/2; // y position
      img2.loadPixels();
      var loc = x + y* img2.width;  
      var t = img2.get(x, y, cellsize, cellsize);         // Pixel array location
      var c = colors(r,g,b,100)
      // var c = color(r,g,b);       // Grab the color
      // Calculate a z position as a function of mouseX and pixel brightness
      var z = (mouseX/width) * brightness(img2.pixels[loc]) - 100.0;
      // Translate to the location, set fill and stroke, and draw the rect
     var r = img2.pixels[loc];
     var g = img2.pixels[loc+1];
     var b = img2.pixels[loc+2];
       r *= brightness;
       g *= brightness;
       b *= brightness;
     
      
      push();
      translate(x,y,z);
      fill(c);
      texture(t);
      noStroke();
      rectMode(CENTER);
      rect(0,0,cellsize,cellsize);
      pop();
    }
  }
}