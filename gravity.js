function gravity(array,group,playerinteraction){
    for(var i = 0; i < array.length; i = i + 1){
      var snd = group.get(i);
      snd.velocityY = snd.velocityY + 0.5;
      snd.collide(group);
      if(playerinteraction === true){
        snd.collide(player);
      }
      snd.collide(platformGroup);
  
      if(snd.y > 610){
        group.get(i).destroy();
        array.pop();
      }
    }
  }