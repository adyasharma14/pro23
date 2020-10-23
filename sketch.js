var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
//var pos=helicopterSprite.position;
var rightBox,leftBox,bottomBox;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	bottomBox=createSprite(width/2, height-50, 200, 20);
	bottomBox.shapeColor="red";

	leftBox=createSprite(width-510, height-90, 20, 100);
	leftBox.shapeColor="red";

	rightBox=createSprite(width-310, height-90, 20, 100);
	rightBox.shapeColor="red";

	//bottomBox.shapeColor=color();


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);

	//bottomBox=new Box(400,350,200,20);

	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	// World.add(world,bottomBox);

	bottomBody= Bodies.rectangle(width/2, height-68, 200, 20 , {isStatic:true} );
	World.add(world,bottomBody);

	leftBody= Bodies.rectangle(width-510, height-90, 20, 100 , {isStatic:true} );
	World.add(world,leftBody);

	rightBody= Bodies.rectangle(width-310, height-90, 20, 100 , {isStatic:true} );
	World.add(world,rightBody);




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

 //packageSprite.x=helicopterSprite.x
 //packageSprite.y=helicopterSprite.y


//else{helicopterSprite.velocityX=0}

//if(keyCode===RIGHT_ARROW){
  //packageSprite.x=packageBody.position.x=packageBody.position.x+2;
//}
//else{helicopterSprite.velocityX=0}

//if(keyCode===LEFT_ARROW){
  //packageSprite.x=packageBody.position.x=packageBody.position.x-2;
	//packageBody.x=packageBody.x-2;
//}
//else{helicopterSprite.velocityX=0}



  keyPressed();
 // bottomBox.display();
  drawSprites();
 
}

function keyPressed() {

	var pos=helicopterSprite.position;
	translate(pos.x);


 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody,false);
 }



	if(keyDown(LEFT_ARROW)){
	//var pos=helicopterSprite.position;
	//	translate(pos.x);
		helicopterSprite.x=helicopterSprite.x-2;
		
	}
	if(keyDown(RIGHT_ARROW)){
		//var pos=helicopterSprite.position;
		//translate(pos.x);
		helicopterSprite.x=helicopterSprite.x+2;
	  }
	  
	
	//packageSprite.x= packageBody.position.x 
	//packageSprite.y= packageBody.position.y
	//{restitution:3,false}
	//packageSprite={isStatic:false}
    // Look at the hints in the document and understand how to make the package body fall only on
    
  
}



