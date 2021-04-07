class createSnow{
    constructor(x,y){
        var options = {
            friction: 0.001,
            restitution:0.1,         
        }
        this.image = loadImage("snow4.webp");
        this.snow = Bodies.rectangle(x,y,50,50,options)
        this.width=10;
        this.height=10;
        World.add(world, this.snow);
    }

    updateY(){     
        if(this.snow.position.y > height){

            Matter.Body.setPosition(this.snow, {x:random(0,1200), y:random(0,300)})
        }
    }

    showSnow(){
        var pos = this.snow.position;
        imageMode(CENTER);
        image(this.image,pos.x,50,50);
    }
}