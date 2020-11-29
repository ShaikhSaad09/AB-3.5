class SlingShot{
    constructor(body1,pointB){
        var option = {
            bodyA:body1,
            pointB:pointB,
            stifness : 0.4,
            length : 10,
        }
        this.sling = Constraint.create(option);
        World.add(world,this.sling);

        this.pointB = pointB
    }
        display(){
           var pointA = this.sling.bodyA.position;
           var pointB = this.pointB;

           strokeWeight(4);
           line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
}
