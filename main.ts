input.onButtonPressed(Button.A, function () {
    if (couleur == 0) {
        rouge()
    } else {
        rouge_mais_étein()
    }
})
function rouge_mais_étein () {
    pins.analogWritePin(AnalogPin.P1, 0)
    pins.analogWritePin(AnalogPin.P2, 0)
    pins.analogWritePin(AnalogPin.P8, 0)
    couleur = 0
}
function rouge () {
    pins.analogWritePin(AnalogPin.P1, 0)
    pins.analogWritePin(AnalogPin.P2, 0)
    pins.analogWritePin(AnalogPin.P8, 1023)
    couleur = 1
}
let couleur = 0
couleur = 0
basic.forever(function () {
	
})
