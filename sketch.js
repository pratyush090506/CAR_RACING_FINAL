var gameState=0;
var allPlayers;
 var playerCount,database,form,player,game
var cars,car1,car2,car3,car4;
var trackImg,groundImg;
var cars1,cars2,cars3,cars4;
var bg;
var canvas;

function preload(){

    bg = loadImage("images/cr.png")
    cars1 =loadImage("../images/car1.png");
    cars2 =loadImage("../images/car2.png");
    cars3 =loadImage("../images/car3.png");
    cars4 =loadImage("../images/car4.png");
    trackImg = loadImage("../images/track.jpg");
    groundImg = loadImage("../images/ground.png");



}

 function setup(){
    canvas=createCanvas(displayWidth-20,displayHeight-30);
    database = firebase.database();
    game=new Game();
    game.getState();
    game.start();
    
}
    



function draw(){
background(bg)
if(playerCount===4){

    game.update(1);


}
if(gameState===1){

    clear();
    game.Play();

    
}
if (gameState===2){

    game.end();



}

}


