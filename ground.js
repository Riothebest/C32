class Ground
{
    constructor(x,y,w,h)
    {
        
        var options ={
            isStatic: true,
        }
        this.body = Bodies.rectangle(x,y,w,h,options)
        //instance variable
        this.w = w;
        this.h = h;
        World.add(world,this.body)
    }

    
    display()
    {
        var pos = this.body.position;
        push();
        fill("red")
        rectMode(CENTER);
        rect(pos.x,pos.y,this.w,this.h);
        pop();
    }
}