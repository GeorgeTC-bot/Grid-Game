function keyPressed(){
    if(keyCode === 49){
      type = 1;
      shape = "BOX";
      w = 50;
    }
    else if(keyCode === 50){
      type = 2;
      shape = "PLAYER";
      w = 70;
    }
    else if(keyCode === 51){
      type = 3;
      shape = "WATER";
      w = 60;
    }
    else if(keyCode === 55){
      type = 7;
      shape = "FINISH LINE";
      w = 90;
    }
    else if(keyCode === 53){
      type = 5;
      shape = "SAND";
      w = 50;
    }
    else if(keyCode === 56){
        type = 8;
        shape = "ERASER";
        w = 70;
    }
    else if(keyCode === 52){
      type = 4;
      shape = "DOOR";
      w = 50;
    }
    else if(keyCode === 54){
      type = 6;
      shape = "REDSTONE";
      w = 80;
    }
    else if(keyCode === 32 && jump === true){
      player.velocityY = -7;
      jump = false;
    }
    else if( keyCode === 82){
      framecount = 0;
      finish.x = -1000;
      finish.y = -1000;
      player.x = -500;
      player.y = -500;
      xcheck = -500;
      ycheck = -500;
      life = 4;
      gamestate = "play";
    }
    else if(keyCode === 57){
        if(grids === false){
            grids = true;
        }
        else if(grids === true){
            grids = false;
        }
    }
    else if(keyCode === 48){
      save();
    }
  }