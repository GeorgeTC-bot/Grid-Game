function open(){
    if (activitor.isTouching(redGroup) || player.isTouching(redGroup)){
      doorstate = "open";
    }
    else{
      doorstate = "closed";
    }
  }