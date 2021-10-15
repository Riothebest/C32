class Link
{
    constructor(bodyA, bodyB)
    {
        //currently 5 rect + 1 circle = total element 6
        //index =length-1
        var lastLink = bodyA.body.bodies.length-2;

        this.link = Constraint.create({

            bodyA: bodyA.body.bodies[lastLink],
            pointA: {x:0, y:0},
            bodyB: bodyB,
            pointB: {x:0, y:0},
            length: 10,
            stiffness: 0.01
        })
        
        
        World.add(world, this.link)
    }

    detach()
    {
        World.remove(world, this.link);
    }
}