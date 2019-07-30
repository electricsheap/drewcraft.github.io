class Character {
    constructor(x, y, scale, mode = 0, sprites) {
		this.x = x;
		this.y = y;
		this.scale = scale;
        this.mode = mode;
        this.sprites = sprites

		this.randVal = Math.random*100;
    }
    
    spr(which) {
		return srcs[
            //Selects the correct sprite set from the correct enemy mode and selected cody part
            this.sprites[this.mode][which]

                //Selects the correct frame
                [round(t/spriteRate)%this.sprites[this.mode][which].length]
		];
    }
    
    draw() {
        //functions which draws out the character onto the p5 canvas
        //subclasses should include drawMode"x" (ie drawMode0() drawMode1() etc)

        this["drawMode"+this.mode]();
    }
}