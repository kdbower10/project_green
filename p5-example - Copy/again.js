var h = 0;
var r = 0;
var d = 1;
var img2;

function preload() {
  img2 = loadImage('electfrank.jpg');
}

function setup() {
  createCanvas(700, 600, WEBGL);


}
function draw() {
background(0);

fill(255,q);
  textSize(64);
  text("ITS ALIVE!",0,150,700,300);
    q=q+.5;



  var dirX = d*cos(r);
  var dirY = d*sin(r);
 
  directionalLight(0, 0, 0, dirX, dirY, 0.5);
  translate(dirX*width/2, -dirY*height/2, 0.5);
  
 
  rotateX(radians(h));
  rotateY(radians(mouseX/width*360));
  rotateZ(radians(mouseY/height*360));
  
  texture(img2);
  box(150, 150, 150);
  
  
  r = (r+0.01) % TWO_PI;

  
    }

