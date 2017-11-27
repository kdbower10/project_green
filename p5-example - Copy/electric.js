var h = 0;//calling global variables
var r = 0;
var d = 1;
var img1;
var img2;
// var img3;
var pg;
// var q=0;
var vid;

function preload() {
  img1 = loadImage("bwfrank.jpg");// preloading image makes overall sketch run smoother
  img2 = loadImage('electfrank.jpg');
  // img3 = loadImage('light.jpg');
  vid = createVideo("thunder.mp4")//https://www.youtube.com/watch?v=1leX66NWMu8
  vid.hide();
  vid.loop();
}

function setup() {
  createCanvas(700, 600, WEBGL);
// textFont("HelveticaBold");
// pg1= createGraphics(700,600)
pg =createGraphics(200,200);
pg.textSize(40);
// this.background(img3);
// image(img3,0,0);
// background(0);
// texture(img3);
// box(400);
}
function draw() {
background(0);
// pg1.background(img3);//tried to lay an image as the background
// texture(pg1);
// pg1.box(400);
texture(vid);
plane(600);

pg.background(img1);//black and white image to the center
pg.fill(158,26,251);
pg.text('ITS ALIVE!',0,50);//Text repeated 
pg.fill(75,5,155);
pg.text('ITS ALIVE!',0,100);
pg.fill(9,0,88);
pg.text('ITS ALIVE!',0,150)
texture(pg);
plane(300);

// background(0);
// texture(img3);
// box(400);


  var dirX = d*cos(r);// Assitance of Katherine rotating box able to lay image on all sides and allow box to swivle with direction to the mouse
  var dirY = d*sin(r);
 
  directionalLight(0, 0, 0, dirX, dirY, 0.5);
  translate(dirX*width/2, -dirY*height/2, 0.5);
  
 
  rotateX(radians(h));
  rotateY(radians(mouseX/width*360));
  rotateZ(radians(mouseY/height*360));
  
  texture(img2);
  box(150, 150, 150);
  
  
  r = (r+0.01) % TWO_PI;

// fill(255,0,0, q);//failed text fade in, note I think webgl limits  
//   stroke(255, q);what you can do 
//   textSize(32);
//   text("I feel my heart glow with an enthusiasm which elevates me to heaven, for nothing contributes so much to tranquillize the mind as a steady purpose — a point on which the soul may fix its intellectual eye.",0,150,700,300);
//     q = q+.5;
  
    }

