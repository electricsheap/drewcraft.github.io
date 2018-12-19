
    //  GLOBAL DECLARATIONSS
var mainCanvas, C, context, btns, shape1, scale, center, isDragging, frameNum


    //    INIT FUNCTION
function init() {
  frameNum = 0;
  mainCanvas = $('#main-canvas')
  scale = 1
  center = [mainCanvas.width()/2, mainCanvas.height()/2]
  C = mainCanvas[0].getContext('2d')
  context = C
  btns = $('.buttons button')
  
  for (let _ = 0; _ < 1000; _++) {
      new Shape(m.randomInt(0, 500), m.randomInt(0, 500))
      
  }
  shape1 = new Shape(100, 100)


  mainCanvas
  .mousedown(e=>{
    center = [e.offsetX,e.offsetY]
    isDragging = true
  })
  .mousemove(e=>{
    if (isDragging) {
      center = [e.offsetX,e.offsetY]
    }
  })
  .mouseup(e=>{
      isDragging = false
  })
  frame()
}

    //    FRAME FUNCTION
function frame(a) {
  requestAnimationFrame(frame)

  frameNum++  
  scale = 500/(1000-(frameNum+500))


  Shape.update()
  
  C.fillStyle = "black"
  C.fillRect(0,0,innerWidth,innerHeight)
  C.beginPath();
  C.moveTo(center[0] + 5, center[1])
  C.arc(center[0], center[1], 5, 0, 6.3)
  C.moveTo(center[0] + 10, center[1])
  C.arc(center[0], center[1], 10, 0, 6.3)
  C.moveTo(center[0] + 15, center[1])
  C.arc(center[0], center[1], 15, 0, 6.3)
  C.moveTo(center[0] + 20, center[1])
  C.arc(center[0], center[1], 20, 0, 6.3)
  C.moveTo(center[0] + 25, center[1])
  C.arc(center[0], center[1], 25, 0, 6.3)
  C.moveTo(center[0] + 30, center[1])
  C.arc(center[0], center[1], 30, 0, 6.3)

  C.strokeStyle = "gray"
  C.stroke()  

  if (scale === NaN || scale === Infinity || m.isNegative(scale)) {
    scale = 0
  } else {
    Shape.draw()
  }

}

    //    UTILITY DECLARATIONS

const m = math
Array.prototype.add = function(obj) {this[this.length]=obj;return this}

$(init)