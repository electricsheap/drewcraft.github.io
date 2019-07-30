
let

//    ELEMENT SOUCES

//Array containing all p5 Images
srcs = [],

//Array containing all p5.sound Sounds
audio = [],




//    TIME

//Frames since sim began
t = 0,

//Total frame count
frameCount = 0,




//    ANIMATION

//Global animation rate val
rate = 1,

//Rate of frame animations
spriteRate = 5,

//Rate of sinus sway animations
swayRate = 1,

//THe index of the song currently playing. A value of -1 indecates no music is playing
songPlaying = -1,

//Master volume for all sounds
masterVolume = 0.3,



//    UTILITY

//has the user interacted with the page yet. Any interaction begins the page
isPlaying = false,


//
melvin_fight = new Scene(
	[
		new Keem(-170, 0, 3, 2),
		//new Doug(-170, 0, 3, 2)
	],
	-1,
),




//Contains every item to be drawn, but split into layers. 
//0 is the background layer, 1 is the forground for enemies, and 2 is the Instant (effect) layer
layers = [[],[],[], []];

	function preload() {
	srcs[0]		= loadImage('assets/sans/head0.png');
	srcs[1]		= loadImage('assets/sans/jaw0.png');
	srcs[2]		= loadImage('assets/sans/arm_left0.png');
	srcs[3]		= loadImage('assets/sans/arm_right0.png');
	srcs[4]		= loadImage('assets/sans/head_red0.png');

	srcs[5]		= loadImage('assets/doug/head_melv0.png');
	srcs[6]		= loadImage('assets/doug/head_melv1.png');
	srcs[7]		= loadImage('assets/doug/head_melv2.png');
	srcs[8]		= loadImage('assets/doug/head_melv3.png');
	srcs[9]		= loadImage('assets/doug/body_melv0.png');
	srcs[10]	= loadImage('assets/doug/body_lower_melv0.png');
	srcs[11]	= loadImage('assets/doug/arm_left_melv0.png');
	srcs[12]	= loadImage('assets/doug/arm_right_melv0.png');

	
	srcs[13]	= loadImage('assets/keem/head_killer0.png');
	srcs[14]	= loadImage('assets/keem/jaw_killer0.png');
	srcs[15]	= loadImage('assets/keem/body_killer0.png');
	srcs[16]	= loadImage('assets/keem/leg_left_killer0.png');
	srcs[17]	= loadImage('assets/keem/leg_right_killer0.png');
	srcs[18]	= loadImage('assets/keem/arm_bottom_left_killer0.png');
	srcs[19]	= loadImage('assets/keem/arm_bottom_right_killer0.png');
	srcs[20]	= loadImage('assets/keem/arm_top_left_killer0.png');
	srcs[21]	= loadImage('assets/keem/arm_top_right_killer0.png');
	// srcs[22]	= loadImage('assets/keem/.png');
	// srcs[23]	= loadImage('assets/keem/.png');
	// srcs[24]	= loadImage('assets/keem/.png');
	// srcs[25]	= loadImage('assets/keem/.png');


	audio[0]  = loadSound('assets/audio/battle1.mp3');
	audio[1]  = loadSound('assets/audio/battle2.mp3');
	audio[2]  = loadSound('assets/audio/battle3.mp3');
	// audio[3]  = loadSound('assets/audio/battle4.mp3');
	// audio[4]  = loadSound('assets/audio/battle5.mp3');
	// audio[5]  = loadSound('assets/audio/the_pro.mp3');
	// audio[6]  = loadSound('assets/audio/jared.mp3');
	// audio[7]  = loadSound('assets/audio/the_news.mp3');
	// audio[8]  = loadSound('assets/audio/killer.mp3');
	// audio[9]  = loadSound('assets/audio/the_review.mp3');
	audio[10]  = loadSound('assets/audio/melvin.mp3');
}

function setup() {
	createCanvas(864,612);
	noSmooth();
	setTimeout(() => {
	isPlaying = true;
		melvin_fight.start();
	}, 2000);
}





function draw() {

	//Increases Framecount
	frameCount++;

	//Tests if game has started before running rest of draw();
	if (!isPlaying)
	return;

	//Increments time val. 
	t++;


	background( ((sin(t/69)+1)/2)*100, ((sin(t/57)+1)/2)*100, ((sin(t/60)+1)/2)*100);

	for (let elm = 0; elm < layers[1].length; elm++) {
		layers[1][elm].draw();
	}

	layers[1][0].draw();

}








				// #########  FUNCTIONS  ##########



function img(pimg, x, y, w, h, r, scale) {
	translate(x, y);
	rotate(TAU*r);

	image(pimg, -(w*pimg.width)/2, -(h*pimg.height)/2, (w*pimg.width), (h*pimg.height));

	rotate(-TAU*r);
	translate(-x, -y);
};



//ends old song and begins new song.
function playSong(newSong = 1, vol = 1, pitch = 1) {
	if (songPlaying != -1) {		//Checks if no song is playing before trying to stop the current song
		audio[songPlaying].stop();
	}

	if (newSong != -1) {			//Checks if a new song is being requested or if all music should stop
		audio[newSong].loop();
		audio[newSong].setVolume(masterVolume * vol);
	}

	songPlaying = newSong;			//Set the current song to be the new song
}


//returns sin of current "t" value scaled to  
function sint(scale, offset = 0, pow = 1) {
	return Math.pow(Math.sin(t*scale*swayRate*rate + offset), pow);
}

function cost(scale, offset = 0, pow = 1) {
	return Math.pow(Math.cos(t*scale*swayRate*rate + offset), pow);
}

function peak(scale, pow = 1, offset = 0) {
	return Math.pow(Math.sin(t*scale*swayRate*rate + offset), pow);
}