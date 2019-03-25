

var part = []
var ehor = -1000
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
  background(255,100,255)
}

function draw() {
  var rnd = random(100)
  if (rnd < 50*nlvl) {
    makePair(random(width), random(height))
  }

  background(40,10,50)
  drawNoise()
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
        this.x += 20
        this.y += 2*sin(this.x/2)
        this.clr = 'rgba(250,250,100,50)'
        this.r = 10
      }
        
    } else if (this.pair !== undefined) {
      
      if (this.x < ehor) {
        this.pair.pair = undefined
        this.pair = undefined
      } else {
      
        if (abs(this.pair.x-this.x) < 2) 
          part.splice(part.indexOf(this),1)
        
        if (this.pair.x > this.x){
          this.x++
        } else {
          this.x--
        }
        
      }
      
    }

    if (this.x > ehor) {
      this.x -= 1/(this.x-ehor)*100
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
  var part1 = new Virtual(x+20, y, rndbool)
  var part2 = new Virtual(x-20, y, !rndbool)
  part1.pair = part2
  part2.pair = part1
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

function drawNoise() {
  var inc = 0.15
  var xoff = 0
  var yoff = 0
  for (var y = 0; y < height+100; y+=r/2){
    xoff = 0
    for (var x = 0; x < width; x+=r/2) {

      var clr = 
      ((1.1-pow(noise(xoff,yoff,zoff+sin(xoff)/3),0.5)) * nlvl
      + 0.5 * (1-nlvl))


      colorMode(RGB,1,1,1,1)

      stroke(0, 0, 0, 0)

      fill((clr>0.4)?clr : clr/10+0.4, 
           clr, 
           (clr>0.5)?clr+0.1 : ((clr>0.2)?clr/10+0.5:clr/4+(clr/10+0.5)), 
           1);

      
      arc(x+(noise(xoff*20+10,yoff*20,zoff*2)*20), 
          y, 
          r+(noise(xoff*20+10,yoff*20+30,zoff*2)*10), 
          r+(noise(xoff*20+30,yoff*20+30,zoff*2)*10)+(pow(clr,2)*300), 
          0, 2*PI);
      xoff+=inc
    }  
    yoff+=inc
  }
  zoff+=0.03
}

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
  nsld = document.getElementById('nlvl')
  nsld.oninput = e => nlvl = nsld.value/100;
  
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

