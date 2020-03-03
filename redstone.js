function Redstone(){
    var redstone = createSprite(mouX,mouY,10,10);
    redstone.shapeColor = "red";

    redstones.push(1);
    redGroup.add(redstone);
    platformGroup.add(redstone);
    blocks.add(redstone);
}