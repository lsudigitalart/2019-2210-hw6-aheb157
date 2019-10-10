
var myImg;
var gifff;
var bear;
var hikers;
var rainbow;

function preload(){
    myImg = loadImage("mountainous.jpg");
    gifff = createImg ("wings.gif");
    bear = createImg ("bear.png");
    hikers =loadImage("hikers.png");
    rainbow =loadImage ("rainbow.png");
}

function setup(){
createCanvas (800,650);

}

function draw (){
background(100);

push ();
image(myImg, 0,0, 900,650);
pop ();

textSize(100);
fill(0,0,255);
noStroke();
text ("TAKE A HIKE", 80, 580);

textSize(100);
fill(0,0255,0);
noStroke();
text ("TAKE A HIKE", 80,430);

textSize(100);
fill(250,215,0);
noStroke();
text ("TAKE A HIKE", 80, 280);

textSize(100);
fill(255,0,0);
noStroke();
text ("TAKE A HIKE", 80, 130);

gifff.position (395,-20);
gifff.size (300,300);

push ();
bear.position (392,0);
bear.size (300,400);
pop ();

push();
image (hikers, 220,550,150,150);
pop ();

push();
image (rainbow, 0,120,550,200);
pop();





}
