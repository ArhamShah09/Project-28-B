class Dustbin {
    constructor(x,y,width,height) {
        var options = {
            'isStatic': true
        }
        this.body = loadImage("dustbingreen.png");
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){ 
        image(this.body,1000,390);
        var pos =this.body.position;
        rectMode(CENTER);
        fill(0,255,0);
        rect1(pos.x, pos.y, this.width, this.height);
        rect2(pos.x-70, pos.y-40, this.width-130, this.height+80);
        rect3(pos.x+70, pos.y-40, this.width-130, this.height+80);
        pop();
    }
}