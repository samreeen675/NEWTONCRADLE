class Bob {
    constructor(x, y, r) {
        var options = {
            isStatic: true,
            restitution: 1,
            friction: 0.5,
            density: 2
        }

        this.x = x;
        this.y = y;
        this.r = r

        this.body = Bodies.circle(x, y, r, options);
        World.add(world, this.body);

    }
    display() {

        var groundPos = this.body.position;
        push()
        translate(groundPos.x, groundPos.y);
        rotate(this.body.angle)
        ellipseMode(RADIUS)
        fill("purple")
        ellipse(0, 0, this.r, this.r)
        pop()
    }

}