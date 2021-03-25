class Box {
    constructor(x,y,w,h){
        var options={
            restitution:0.8765678,
            friciton:1.01,
            density:0.34

        }
        
        this.body=Bodies.rectangle(x,y,w,h,options)
        this.width=w;
        this. height=h;
        World.add(Myworld,this.body)
    }
                                                  
    display(){
       var pos=this.body.position
       var angle=this.body.angle
        push();
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER)
        strokeWeight(1.999)
        stroke("yellow")
        fill("black")
        rect(0,0,this.width,this.height)
        pop();


    }



}