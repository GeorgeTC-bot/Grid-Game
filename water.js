function Water(){
    var water = createSprite(mouX,mouY,10,10);
    water.shapeColor = rgb(124, 221, 220);
    water.tint = color;
    fluid.push(1);
    fluidGroup.add(water);
    blocks.add(water);
}