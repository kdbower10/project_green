var img;       // The source image
var cellSize = 16; // Dimensions of each cell in the grid
var cols, rows;   // Number of columns and rows in our system

function setup() {
  createCanvas(400, 400, WEBGL); 
  img = loadImage("frankface.jpg"); // Load the image
  cols = width / cellSize;             // Calculate # of columns
  rows = height / cellSize;            // Calculate # of rows
  pixelDensity(1);
}


function draw() {
  background(0);
  ambientLight(200);
  pointLight(250, 250, 250, 100, 100, 0);
  // Begin loop for columns
  for(var i = 0; i < cols; i++) {
    // Begin loop for rows
    for(var j = 0; j < rows; j++) {
      var x = i * cellSize;  // x position
      var y = j * cellSize;  // y position
      img.loadPixels();
      var loc = x * 4 + y * img.width * 4;  // Pixel array location
      var t = img.get(x, y, cellSize, cellSize); // texture for plane 
      var r = pixels[loc]; 
      var g = pixels[loc+1];
      var b = pixels[loc+2];
      // Grab the color
      // Calculate a z position as a function of mouseX and pixel brightness        
      var z = -20;                                                                                                                                  
      // Translate to the location, set fill and stroke, and draw the rect
      push();
      translate(x, y, z); 
      specularMaterial(r, g, b); 
      plane(cellSize, cellSize);
      pop();
    }   
  }

}