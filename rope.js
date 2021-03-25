class Rope{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:1.231312313,
            length:300

        }
        this.rope=Constraint .create(options)
        World.add(Myworld,this.rope)
        this.pointB=pointB;

    }
        display(){
            var pointA=this.rope.bodyA.position
            var pointB=this.pointB;

            push();
            strokeWeight(2)
            stroke("red")
            line(pointA.x,pointA.y,pointB.x,pointB.y)



            pop();

        }
}