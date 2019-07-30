class Scene {
    constructor (elms, mus, bg) {
        this.elms = elms;
        this.mus = mus;
        this.background = bg;
        this.isPlaying = false;
    }

    start() {
        playSong(this.mus);
        layers[1] = this.elms
        
        this.isPlaying = true;
    }

    draw() {
        
    }

    end() {
    }
}