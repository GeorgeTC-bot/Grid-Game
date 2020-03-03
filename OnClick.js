function Click(){
    if(type === 1){
      spawnTiles();
    }
    else if (type === 2){
      player.x = mouX;
      player.y = mouY;
      xcheck = player.x;
      ycheck = player.y;
      player.velocityY = 0;
      life = 4;
      gamestate = "play";
    }
    else if(type === 3){
      Water();
    }
    else if(type === 7){
      finish.x = mouX;
      finish.y = mouY;
    }
    else if(type === 5){
      Sand();
    }
    else if(type === 8){
        for(var i = 0; i < cubes.length; i = i + 1){
            var platform = platformGroup.get(i);
            if(mouX === platform.x && mouY === platform.y){
              platformGroup.get(i).destroy();
              cubes.pop();
            }
        }  
        for(var i = 0; i < fluid.length; i = i + 1){
            var flu = fluidGroup.get(i);
            if(mouX === flu.x && mouY === flu.y){
              fluidGroup.get(i).destroy();
              fluid.pop();
            }
        }
        for(var i = 0; i < sands.length; i = i + 1){
          var snd = sandGroup.get(i);
          if(mouX === snd.x && mouY === snd.y){
            sandGroup.get(i).destroy();
            sands.pop();
          }
        }
        for(var i = 0; i < doors.length; i = i + 1){
          var dr = doorGroup.get(i);
          if(mouX === dr.x && mouY === dr.y){
            doorGroup.get(i).destroy();
            doors.pop();
          }
        }
        for(var i = 0; i < redstones.length; i = i + 1){
          var rd = redGroup.get(i);
          if(mouX === rd.x && mouY === rd.y){
            redGroup.get(i).destroy();
            redstones.pop();
          }
        }
    }
    else if(type === 4){
      Door();
    }
    else if(type === 6){
      Redstone();
    }
}