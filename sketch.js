//type of brush
var type;
//array that keeps track of how many blocks
var cubes = [];
//*yare yare yara* fluids
var fluid = [];
//*yare yare yara* sands
var sands = [];
//*yare yare yara* doors
var doors = [],doorstate;
//*yare yare yara* redstone
var redstones = [];
//cursor settings
var mouX,mouY,mousewidth,mouseheight;
//player options
var player,jump,life;
//groups for fluids and platforms
var platformGroup,fluidGroup,sandGroup,doorGroup,redGroup,blocks,activitor;
//X & Y checkpoints
var xcheck,ycheck;
var gamestate;
//flag
var finish,scr,framecount;
//world options?
var shape,w,grids;
var Slider,color;

function setup(){
  createCanvas(800,600);
  type = 1;
  shape = "BOX";
  scr = createSprite(400,300,800,600);
  scr.shapeColor = 220;
  framecount = 0;
  mousewidth = 10;

  Slider = createSlider(0, 220, 110);
  Slider.position(350, 560);

  //flag pole from Mario... remember?
  finish = createSprite(-1000,-1000,10,50);
  finish.shapeColor = "green";

  //creates player... sadly only one player can be created :(
  player = createSprite(-500,-500,10,10);
  player.shapeColor = rgb(204, 0, 0);
  life = 4;
  xcheck = -500;
  ycheck = -500;

  //create groups
  platformGroup = createGroup();
  fluidGroup = createGroup();
  sandGroup = createGroup();
  doorGroup = createGroup();
  redGroup = createGroup();
  activitor = createGroup();
  blocks = createGroup();

  //gamestate and gridstate
  gamestate = "play";
  grids = false;
}

function draw(){
  background(220);
  //cursor pos
  mouX = (Math.round((mouseX/10)))*10;
  mouY = (Math.round((mouseY/10)))*10;
  framecount = framecount + 1;

  activitor.add(player);

  //different display brush
  if(type === 7){
    mouseheight = 50;
  }
  else{
    mouseheight = 10;
  }

  //player interaction with fluids
  if(player.isTouching(fluidGroup)){
    if(player.velocityY > 2){
      player.velocityY = 2;
    }
    if(player.velocityY < -2){
      player.velocityY = -2;
    }
  }

  //stops player
  player.velocityX = 0;

  //controls
  if(keyIsDown(65)){
    player.velocityX = -5;
  }
  else if(keyIsDown(68)){
    player.velocityX = 5;
  }
  //player gravity
  player.velocityY = player.velocityY + 0.5;

  //if player touches ground or fluids
  if(player.isTouching(platformGroup) 
  || player.isTouching(fluidGroup) 
  || player.isTouching(sandGroup)){
    jump = true;
  }
  //if touching flagPole
  if(player.isTouching(finish)){
    gamestate = "end";
  }

  //respawn if below 620 y-pos
  if(player.y >= 620 && life > 0){
    gamestate = "respawn";
  }
    
  if(gamestate === "respawn" && life >= 1 && gamestate != "end"){
    player.x = xcheck;
    player.y = ycheck;
    gamestate = "play";
    life = life - 1;
  }
  else if(life === 0){
    gamestate = "over";
  }
  if(life < 0){
    life = 0;
  }
  

  if(mousePressedOver(scr) && mouY <= 530){
    Click();
  }
  gravity(sands,sandGroup,true);
  gravity(fluid,fluidGroup,false)
  if(framecount % 50 === 0){
    open();
  }
  if(doorstate === "open"){
    for(var i = 0; i < doors.length; i++){
      dr = doorGroup.get(i);
      platformGroup.remove(dr);
    }
  }
  else if(doorstate === "closed"){
    for(var i = 0; i < doors.length; i++){
      dr = doorGroup.get(i);
      platformGroup.add(dr);
    }
  }

  //console.log(cubes);
  sandGroup.collide(platformGroup);
  player.collide(sandGroup);
  player.collide(platformGroup);
  drawSprites();
  fill("black");
  rect(710,550,w,70);
  if(gamestate === "end"){
    fill(rgb(204, 0, 0));
    text("YOU WIN!!",xcheck,ycheck);
  }
  else if(gamestate === "over"){
    fill(rgb(204, 0, 0));
    text("OVER",xcheck,ycheck);
  }

  //cursor
  noFill();
  rect(mouX - mousewidth/2,mouY - mouseheight/2,mousewidth,mouseheight);

  color = Slider.value();
  fill(color);
  rect(330,540,170,50);
  if(color > 50){
    fill("black");
  }
  else{
    fill("white");
  }
  text(color,410,560);
  //display grid only if grid on
  if(grids === true){
    grid();
  }

  fill(rgb(204, 0, 0));
  text(shape,720,570);
  text("PLAYER",player.x - 20,player.y - 20);

  fill(rgb(204, 0, 0));
  text("x"+(life-1),750,50);
  console.log(mouY);
}


