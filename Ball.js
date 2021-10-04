class Ball{
    constructor(x, y, width, height){

        let options={
            restitution:0.8,
            density:1
        };
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }

    show(){
        let pos = this.body.position;

        push();
        ellipseMode(CENTER);
        fill(255, 51, 51);
        ellipse(pos.x, pos.y, this.width, this.height);
        pop();
    }
}