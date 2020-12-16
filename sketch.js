

function preload(){
    
}

function setup(){
   if(this.rain.position.y > height){

        Matter.Body.setPosition(this.rain,{x:random(0,400), y:random(0,400)})
   }
    
}

function draw(){
    function drops(){

        var maxDrops = 100;
            for(var i=0; i<maxDrops; i++){
                maxDrops.push(new createDrop(random(0,400), random(0.400)));
            }
    }
}   

