class Keem extends Character {

	constructor(x, y, scale, mode = 2) {
		super(x, y, scale, mode, Sprites.keem);
	}

	drawMode0() {

	}

	drawMode1() {

	}

	drawMode2() {



		//Left Leg
		img(this.spr(3)
			,width/2+this.x+				+this.scale*( 0 * sin(t*swayRate/1) - 10 )
			,height/2+this.y+				+this.scale*( 0 * sin(t*swayRate/1) + 25)
			,this.scale   
			,this.scale   
			,0								+ 0 * sin(t*swayRate/8)							  
		);

		//Right Leg
		img(this.spr(4)
			,width/2+this.x+				+this.scale*( 0 * sin(t*swayRate/1) + 10 )
			,height/2+this.y+				+this.scale*( 0 * sin(t*swayRate/1) + 21 )
			,this.scale   
			,this.scale   
			,0								+ 0 * sin(t*swayRate/8)							  
		);

		//Top Left Arm
		img(this.spr(7)
			,width/2+this.x+				+this.scale*( 0 * sin(t*swayRate/1) - 18 )
			,height/2+this.y+				+this.scale*( 0 * sin(t*swayRate/1) - 26 )
			,this.scale   
			,this.scale   
			,0								+ 0 * sin(t*swayRate/8)							  
		);

		//Top Right Arm
		img(this.spr(8)
			,width/2+this.x+				+this.scale*( 0 * sin(t*swayRate/1) + 16 )
			,height/2+this.y+				+this.scale*( 0 * sin(t*swayRate/1) - 23 )
			,this.scale   
			,this.scale   
			,0								+ 0 * sin(t*swayRate/8)							  
		);

		//Body
		img(this.spr(2)
			,width/2+this.x+				+this.scale*( 0 * sint(1/10, 	0) )
			,height/2+this.y+				+this.scale*( 2 * sint(1/10, 	-1) )
			,this.scale   
			,this.scale   
			,0								+ 0 * sin(t*swayRate/8)							  
		);

		//Left Arm
		img(this.spr(5)
			,width/2+this.x+				+this.scale*( 1 * sint(1/10, 	3) - 25 )
			,height/2+this.y+				+this.scale*( 1 * cost(1/10, 	3) - 13 )
			,this.scale   
			,this.scale   
			,0								+ 1/40 * sint(1/20, 	3)				  
		);

		//Right Arm
		img(this.spr(6)
			,width/2+this.x+				+this.scale*( -1 * sint(1/10, 3) + 20 )
			,height/2+this.y+				+this.scale*( 1 * cost(1/10, 	3) - 10 )
			,this.scale   
			,this.scale   
			,0								+ 1/40 * -sint(1/20, 	3)						  
		);
		
		
		//Head
		img(this.spr(0)
			,width/2+this.x+				+this.scale*( 0 * sint(1,		0) - 0)
			,height/2+this.y+				+this.scale*( 1 * sint(1/10, 	0) - 10)
			,this.scale   
			,this.scale   
			,0								+ 0 * sint(1/8,		0)							  
		);

		//Jaw
		img(this.spr(1)
			,width/2+this.x+				+this.scale*( 0 * sint(1,		0) - 0)
			,height/2+this.y+				+this.scale*( 3 * sint(1/10, 	0) - 5)
			,this.scale   
			,this.scale   
			,0								+ 0 * sint(1/8,		0)							  
		);
		
		// //Head
		// img(this.spr(3)
		// 	,width/2+this.x+				+this.scale*( 0 * sin(t*swayRate/1) )
		// 	,height/2+this.y+				+this.scale*( 0 * sin(t*swayRate/1) )
		// 	,this.scale   
		// 	,this.scale   
		// 	,0								+ 0 * sin(t*swayRate/8)							  
		// );

	}

}