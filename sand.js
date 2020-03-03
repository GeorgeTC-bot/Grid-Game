function Sand(){
    var sand = createSprite(mouX,mouY,10,10);
    sand.shapeColor = rgb(255, 251, 153);
    sand.tint = color;
    sands.push(1);
    sandGroup.add(sand);
    activitor.add(sand);
    blocks.add(sand);
}