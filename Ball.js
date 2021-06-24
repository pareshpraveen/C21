class Ball {
    constructor(x,y,r){
       var Option = {

        restitution : 0.9,
       }

        this.body = Bodies.circle(x,y,r,Option);
        this.r = r;
        World.add(world,this.body);
    }
    show(){
       
        var pos = this.body.position;
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.r,this.r);
    }


}