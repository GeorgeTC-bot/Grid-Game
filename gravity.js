function gravity(){
    for(var i = 1; i < sands.length; i = i + 1){
      var snd = sandGroup.get(i);
      snd.velocityY = snd.velocityY + 0.5;
      snd.collide(sandGroup);
      snd.collide(player);
  
      if(snd.y > 610){
        sandGroup.get(i).destroy();
        sands.pop();
      }
    }
  }