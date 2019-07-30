class Instant {
    constructor(audio, alg, time = 1000) {
        this.audio = audio;
        this.drawAlg  = alg;
        this.timerMax = time;
        this.timer = 0;
    }
    start() {
        layers[2].unshift(this);
    }
    draw() {
        this.alg()
    }
}