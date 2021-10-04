class BlowerMouth{
    constructor(x, y, width, height){

        let options={
            isStatic:true
        };

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.color = color
        World.add(world, this.body);
    }

    show(){
        let pos = this.body.position;

        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        strokeWeight(1);
        stroke(0);
        fill(230, 77, 0);
        rect(0, 0, this,width, this.height);
        pop();
    }
}