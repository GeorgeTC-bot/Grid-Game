function spawnTiles(){
    tiles = createSprite(mouX,mouY,10,10);
    tiles.shapeColor = rgb(137, 61, 61);
    tiles.tint = color;
    cubes.push(1);
    platformGroup.add(tiles);
    blocks.add(tiles);
}