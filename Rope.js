class Rope{
   constructor(body1,pointB)
   {
   
    var options = {
        body1:body1,
        pointB:pointB
    }
     this.rope = Constraint.create(options);
     World.add(world,this.rope);
   
    }

  

    display(){
      
        
            var pointA = this.rope.body1.position;
          
            strokeWeight(4);
            stroke("#301608");
            line(pointA.x, pointA.y,this.rope.pointB.x, this.rope.pointB.y);
          


        }
    }
    
