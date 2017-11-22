var img1;
var img2;
var img3;
var q=0;
var cellsize = 2; 
var cols, rows;


function preload(){
  img1 = loadImage("bwfrank.jpg");

  img2 = loadImage("electfrank.jpg");

  img3 = loadImage("facefrank.png");


  

}

function frank(){
  image(img1,0,0);

  fill(255,0,0,q);
  stroke(255,q);
  textSize(32);
  text("I feel my heart glow with an enthusiasm which elevates me to heaven, for nothing contributes so much to tranquillize the mind as a steady purpose — a point on which the soul may fix its intellectual eye.",0,150,700,300);
    q=q+.5;

}


function setup(){
  createCanvas(700,600);
  textFont("HelveticaBold");
}

function draw() {

  frank();
  

  
}