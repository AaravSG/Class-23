class Box {



    constructor(x,y,w,h){



        var options = {

            restitution : 0.5,
            friction :1,
            density :1


        }
        
        this.body = Bodies.rectangle(x,y,w,h,options)
        World.add(world,this.body);


        this.w = w;
        this.h = h;
    }




    display(){

        var pos = this.body.position;
        var angle= this.body.angle;

        push ();

        translate(pos.x,pos.y)
        rotate(angle);
        
        stroke("white");
        strokeWeight(4)
        fill ("orange");
        rectMode(CENTER);
        rect(0,0,this.w,this.h);

        pop ();


    }


}