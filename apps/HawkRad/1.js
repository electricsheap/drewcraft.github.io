

var part = []
var ehor = 500
var zoff = 0
var nlvl = 0
var shft = false
var clk = false
var frrt = 30
var r = 90

let nsld, fr, frav

function setup() {
  frameRate(frrt)
  pixelDensity(1)
  background(100,100,100)
}

function draw() {

  background(50,50,55)
  colorMode(RGB, 100, 100, 100, 100)
  fill(0, 0, 0,70)
  rect(0,0, ehor, height)

  // draw all particles
  part.forEach(elm=>elm.update())
  part.forEach(elm=>elm.draw())

  //draw event horizon
  stroke(0,0,0,0)

  colorMode(RGB, 100, 100, 100, 100)
  fill(5, 0, 10, 30)
  rect(0,0, ehor, height)
  
  if (clk && shft) {
    ehor = ehor+=( (mouseX-ehor)<200 ? (mouseX-ehor) : 200 )/10
  }
}

class Virtual {
  constructor(x, y, isPos, pair) {
    this.x = x
    this.y = y
    this.isPos = isPos
    this.clr = isPos ? '#88F' : '#F88'
    this.pair = pair
    part[part.length] = this
    
    this.r = 15;
  }

  tryPair() {
    var close = part[0]
    var maxrng = 20
    var i = 0
    do {
      close = part[i]
      i++
      if (part[i] == this)
        continue
    } while (i < part.length)
  }

  update() {
  
    if (this.pair === undefined) {
      
      if (this.x < ehor) {
        this.x -= 20
        
      } else {
        this.x -= 1/(this.x-ehor)*50
      }
        
    }
  }

  draw() {
    colorMode(RGB, 100, 100, 100, 100)
    stroke(0,0,0,0)
    fill(this.clr)
    arc(this.x,this.y,this.r,this.r,0,2*PI)
  }
}

function makePair(x, y) {
  var rndbool = Boolean(round(random(0,1)))
  var part1 = new Virtual(x, y, false)
}

// function drawNoise() {
//   var inc = 0.15
//   var xoff = 0
//   var yoff = 0 + zoff
//   var r = 60
//   for (var y = 0; y < height+100; y+=r/2){
//     xoff = 0 - 2*yoff +2*zoff
//     for (var x = 0; x < width; x+=r/2) {

//       var clr = (1.1-pow(noise(xoff,yoff,zoff),0.6))

//       colorMode(RGB,1,1,1,1)

//       stroke(0, 0, 0, 0)

//       fill((clr>0.4)?clr : 0.4, 
//            clr, 
//            (clr>0.5)?clr+0.1 : 0.5, 
//            1);

      
//       arc(x+(noise(xoff*20+10,yoff*20,zoff*2)*20), 
//           y-(clr*100), 
//           r+(noise(xoff*20+10,yoff*20+30,zoff*2)*10), 
//           r+(noise(xoff*20+30,yoff*20+30,zoff*2)*10), 
//           0, 2*PI);
//       xoff+=inc
//     }  
//     yoff+=inc/2
//   }
//   zoff+=0.06
// }

function resize() {
  resizeCanvas(window.innerWidth, window.innerHeight-90)
}

let ctfr = 0
let avfr = frrt

function updateFr(e, t) {
  fr.innerText = round(frameRate())
  ctfr++
  avfr = round(avfr*0.85 + frameRate()*0.15)
  frav.innerText = avfr
}

onload = () => {
  
  fr = document.getElementById('fr')
  frav = document.getElementById('frav')
  setInterval(updateFr, 1)

  resize()
}

onresize = resize

onkeydown = e => {
  if (e.shiftKey) {
    shft = true
  }
}

onkeyup = e => {
  if (e.which === 16) {
    shft = false
  }
}

onmousedown = e => {
  clk = true
  if (!shft) {
    makePair(mouseX, mouseY)
  }
}

onmouseup = e => {
  clk = false
}

