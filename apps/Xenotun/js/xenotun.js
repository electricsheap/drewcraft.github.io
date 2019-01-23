"using strict"

/*
*    __     __  
*    \_\   /\_\
*   \ \ \ / / /    _______       ___      __       ______
*    \ \ \ / /    |\ ______\    |\ __\  |\ _\    / / ____ \
*     \ \   /     | | ______|   | |   \ | | |   | | /    \ |
*     / /   \     | | |____\    | | |\ \| | |   | | |    | |
*    / / / \ \    | |  ____|    | | | \ \ | |   | | |    | |
*   / / / \ \ \   | | |_____\   | | |\ \ \| |   | | \____/ |
*   \/_/   \ \_\   \|_______|    \|_| \ \___|    \ \______/
*
*     ===================================================
*            ________    __    __    ____   __
*            \___  __\   \ \   \ \   \   \  \ \
*                \ \      \ \   \ \   \ \\ \ \ \
*                 \ \      \ \___\ \   \ \ \ \\ \
*                  \_\       \_____\    \_\  \___\ .js
*
*       requires math.js (http://mathjs.org/download.html)
*
*/



//    The scale class creates an object which stores the properties
//    of a scale using a mathematical function. this functions does not
//    need to be logarithmic.
//    it also converts this scale into ∆¢ (cent differnce), and than into
//    .tun format

class Scale {
    constructor(f, base= 440, offset = 1000) {
        // f: should act as a mathamatical function that determines the freqncies of the new scale
        this.func = f

        // base: determins the base frequency of the new scale
        this.base = base

        // offset: determins what cent differnce of the lowest note from the default C-2
        this.offset = offset
    }

    get tuning() {
        // generates a list of cents differnces for note 0 - 127
        // coresponds with the '[Tuning]' division off .tun files
        // frequencies rounded to integers
        var notes = 128
        let val = ''
        for (let i = 0; i < notes; i++) {
            //each recursion calculates the next note in the series by
            //finding its frequency and converting it to ∆¢, then returns
            val +=
            `note ${i}= ${
                math.round(this.toCents(this.func(i))) + 0
            }\n`
        }
        return val
    
    }

    get exactTuning() {
        // operates identicaly to this.tuning although rounded to the 6th
        // decimal
        var notes = 128
        let val = ''
        for (let i = 0; i < notes; i++) {
            //each recursion calculates the next note in the series by
            //finding its frequency and converting it to ∆¢, then returns
            val +=
            `note ${i}= ${
                this.toCents(this.func(i)).toPrecision(10) + 0
            }\n`
        }
        return val
    }

    get tun() {
        //returns a string in .tun format including [Tuning] and [Exact Tuning]
        //does not yet include [Functional Tuning]
        return (`
[Info]
Editor= "tuning.js"

[Tuning]
${this.tuning}

[Scale Begin]
Format= "AnaMark-TUN"

[Exact Tuning]
${this.exactTuning}
[Scale End]
`)
    }

    toCents(freq) {
        //converts frequncy to cent differnce of 12EDU scale using
        //the inverse function of the curve used to caluclate the
        //12EDU scale: 2^(x/12) where x is the given interval
        return math.log2(math.pow(freq / 440, 12))*100
    }
}

Scale.logFunc = function(notes = 12,ratio = 2) {
    // creates a scale function based on equal-temperment logarithmic curve
    // notes specifies the number of notes in an octive 
    // ratio specifies the harmonic ratio at which an octive ends
    return (f)=>math.pow(ratio,f/notes)*440
}

Scale.tet12 = Scale.logFunc()
Scale.tet24 = Scale.logFunc(24)
Scale.tet22 = Scale.logFunc(22)
Scale.tet10 = Scale.logFunc(10)
Scale.tri20 = Scale.logFunc(20,3)
Scale.scale12tet = Scale.logFunc()
Scale.scale12tet = Scale.logFunc()

