class Rope {
        constructor(b1, b2,x,y) {
            var options = {
                length: 200,
                stiffness: 0.05,
                bodyA: b1,
                bodyB: b2
            }
            this.sling = cons.create(options)
            World.add(world, this.sling);
            this.x = x
            this.y = y
        }
    
        display() {
            var p1, p2
            p1 = this.sling.bodyA.position
            p2 = this.sling.bodyB.position
            stroke("white")
            line(p1.x,p1.y,p2.x+this.x,p2.y+this.y)
        }
}