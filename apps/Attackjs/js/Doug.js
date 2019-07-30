class Doug extends Character {

	constructor(x, y, scale, mode = 2) {
		super(x, y, scale, mode, Sprites.doug);
	}
	
	drawMode0() {

	}

	drawMode1() {

	}

	drawMode2() {
		//Lower Body
		img(this.spr(2)
			,width/2+this.x+				+this.scale*( 0.17 * sin(t*swayRate/1) )
			,height/2+this.y+				+this.scale*( 0 * sin(t*swayRate/1) )
			,this.scale   
			,this.scale   
			,0								+ 0 * sin(t*swayRate/8)							  
		);

		//Upper Body
		img(this.spr(1)
			,width/2+this.x+				+this.scale*( 0.3 * sin(t*swayRate/1) )
			,height/2+this.y+				+this.scale*( 1.7 * sin(t*swayRate/8) - 30 )
			,this.scale   
			,this.scale   
			,0								+ 0 * sin(t*swayRate/8)
		);

		//Left Arm
		img(this.spr(3)
			,width/2+this.x+				+this.scale*( 0 * sin(t*swayRate/1) - 20 )
			,height/2+this.y+				+this.scale*( 1.7 * sin(t*swayRate/8 - PI/8) - 37 )
			,this.scale   
			,this.scale   
			,0								+ 0.01 * sin(t*swayRate/8)
		);

		//Right Arm
		img(this.spr(4)
			,width/2+this.x+				+this.scale*( 0 * sin(t*swayRate/1) + 19 )
			,height/2+this.y+				+this.scale*( 1.7 * sin(t*swayRate/8 - PI/8) - 37 )
			,this.scale   
			,this.scale	
			,0								- 0.01 * sin(t*swayRate/8)
		);

		//Head
		img(this.spr(0)
			,width/2+this.x+				+this.scale*( 0 * sin(t*swayRate/1) )
			,height/2+this.y+				+this.scale*( 3.3 * sin(t*swayRate/8 - PI/8) - 43 )
			,this.scale	  
			,this.scale  
			,0								+ 0.1 * pow((sin(t*swayRate/(30+20*noise(t/10)))+1)/2,200)
		);
	}


}


Doug.audio = 
[

]