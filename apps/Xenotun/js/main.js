let inFunc = $('#in-func')

let create = $('#createFile')

let dl = $('#download')[0]

let dlBtn = $('#downloadBtn')

let fileFrame = $('.file.body')

var currentFunc = eval(`(f)=>{with(math){return ${inFunc.val()}}}`)

var currentScale = new Scale(Scale.tet12)

var canDownload = false

function update() {
    currentFunc = f=>math.eval(inFunc.val(), {x:f})
}

function updateFile(text, name = "tuning.tun") {
    let file
    let html = text

    file = new Blob([text], {type: "AnaMark-TUN"})
    dl.href = URL.createObjectURL(file);
    dl.download = name;
    do {
        html = html.replace("\n", "<br>") 
    } while (html.search("\n") != -1)

    fileFrame.html(html)
}

create.click((e)=>{
    canDownload = true
    update()
    if (typeof currentFunc(10) != 'number') {
        alert('ERROR\nYour function must return a number')
        canDownload = false
        return -1
    }
    currentScale = new Scale(currentFunc)
    updateFile(currentScale.tun)
})


  