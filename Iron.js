class Iron{
	constructor(x,y,width,height)
	{ 
		var options = {
			'density':50,
			'friction': 3,
			'restitution':0.8
		  };
	// assign options to the rubber ball

		this.x=x;
		this.y=y;
		this.width = width;
        this.height = height;
		this.body=Bodies.rectangle(this.x, this.y,this.width,this.height , options)
		World.add(world, this.body);

	}
	display()
	{
			var pos =this.body.position;
            var angle = this.body.angle;		
			push()
			translate(pos.x, pos.y);
            rotate(angle);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("grey");
			fill("grey");
			//draw the rect here to display the rubber ball
            rect(0,0,this.width,this.height)
			pop()
	}

}