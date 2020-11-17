class Particle {

    constructor(x, y, radius) { // 10
        var options ={
            restitution: 0.8
        }
        // console.log(x);
        // console.log(y);
        // console.log(radius);
        this.radius = radius * 2;// 20
        this.body = Bodies.circle(x, y, radius, options);
        
        this.color = color(random(0, 255), random(0, 255), random(0, 255));
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;

        // push();
        // translate(pos.x, pos.y);
        // rotate(angle);
        fill(this.color);
        ellipseMode(CENTER);
        // ellipse(pos.x, pos.y, this.radius, this.radius, this.color);
        //console.log(this.radius);
        ellipse(pos.x, pos.y, this.radius);
        // pop();
    }

}