function grid(){
    fill (142, 142, 142);
    for(var i = 5; i <= 805; i = i + 10){
        line(0,i,800,i);
    }
    for(var i = 5; i <= 805; i = i + 10){
        line(i,0,i,800);
    }
}