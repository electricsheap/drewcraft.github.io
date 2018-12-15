m = math

objs = {
    Shape: []
}


class Shape {
    static update() {
        objs.Shape.forEach(i=>i.update())
    }
    static draw() {
        objs.Shape.forEach(i=>i.draw())
    }
    constructor(x, y) {
        this.x = x 
        this.y = y 
        this.r = m.random(1.5,7)
        this.clr = `rgba(${m.randomInt(200,255)},${m.randomInt(200,225)},200,0.8)`
        this.fillStyle = C.createRadialGradient(75, 50, 5, 90, 60, 100);
        this.fillStyle.addColorStop(0, "rgba(0,0,0,0)")
        this.fillStyle.addColorStop(1, this.clr)

        objs.Shape.push(this)
    }
    get distCenter() {
        return m.distance([this.x, this.y], center)
    }
    get printPt() {
        let dist = this.distCenter
        if (dist===0) {
            return [this.x, this.y]
        }
        let tx = m.acos((this.x-center[0])/dist)
        let ty = m.asin((this.y-center[1])/dist) 
        let dx = (dist) * m.cos(tx)*(scale-1)
        let dy = (dist) * m.sin(ty)*(scale-1)
        return [this.x + dx, this.y + dy]
    }
    update() {

    }
    draw() {
        C.beginPath();
        C.arc(this.printPt[0], this.printPt[1], 10, 0, m.PI*2);
        try {
            this.grd = C.createRadialGradient(this.printPt[0], this.printPt[1], this.r/3, this.printPt[0], this.printPt[1], this.r);
            this.grd.addColorStop(0, this.clr)
            this.grd.addColorStop(1, "rgba(0,0,0,0)")        
        } catch (err) {
            console.error(err)
        }
        C.fillStyle = this.grd
        C.fill()
    }
}