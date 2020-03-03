function Door(){
    var door = createSprite(mouX,mouY,10,10);
    doorstate = "closed";
    door.shapeColor = rgb(237, 171, 73);
    door.tint = color;

    doors.push(1);
    doorGroup.add(door);
    platformGroup.add(door);
    blocks.add(door);
}