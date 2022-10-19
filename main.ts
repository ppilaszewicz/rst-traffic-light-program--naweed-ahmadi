radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 19) {
        basic.showIcon(IconNames.Fabulous)
        basic.clearScreen()
        CLEAR()
        Green3()
        basic.pause(10000)
        CLEAR()
        yelow()
        basic.pause(2000)
        CLEAR()
        RED()
    }
})
function Green2 () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Green))
    basic.showIcon(IconNames.StickFigure)
    count = 20
    for (let index = 0; index < 21; index++) {
        basic.showNumber(count)
        music.playTone(466, music.beat(BeatFraction.Half))
        count += -1
    }
}
input.onButtonPressed(Button.A, function () {
    basic.pause(5000)
    Green()
    basic.pause(1000)
    CLEAR()
    yelow()
    basic.pause(2000)
    CLEAR()
    RED()
})
function RED () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Red))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
}
function off () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(1000)
    strip.clear()
    range = strip.range(1, 1)
    basic.pause(1000)
    strip.clear()
    range.showColor(neopixel.colors(NeoPixelColors.Yellow))
    range = strip.range(2, 1)
    basic.pause(1000)
    strip.clear()
    range.showColor(neopixel.colors(NeoPixelColors.Green))
    basic.pause(1000)
    strip.clear()
}
function Green3 () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Green))
    basic.showIcon(IconNames.No)
}
input.onButtonPressed(Button.B, function () {
    music.playTone(831, music.beat(BeatFraction.Half))
    music.playTone(740, music.beat(BeatFraction.Half))
    basic.pause(5000)
    Green2()
    basic.pause(1000)
    yelow()
    music.playMelody("- C5 B A G - - - ", 120)
    basic.pause(2000)
    RED()
})
function Censor () {
    for (let index = 0; index < 4; index++) {
        pins.digitalWritePin(DigitalPin.P1, 0)
        control.waitMicros(2)
        pins.digitalWritePin(DigitalPin.P1, 1)
        control.waitMicros(10)
        pins.digitalWritePin(DigitalPin.P1, 0)
        Distance = pins.pulseIn(DigitalPin.P2, PulseValue.High) / 58
        if (Distance == 5) {
            count2 += 1
        }
    }
    if (count2 == 4) {
        basic.pause(2000)
        Green3()
        basic.pause(1000)
        CLEAR()
        yelow()
        basic.pause(2000)
        CLEAR()
        RED()
    }
    count2 = 0
}
function CLEAR () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    strip.clear()
    range = strip.range(1, 1)
    strip.clear()
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(2, 1)
    strip.clear()
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    strip.clear()
}
function yelow () {
    basic.showIcon(IconNames.No)
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Yellow))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
}
function Green () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Green))
    basic.showIcon(IconNames.StickFigure)
    basic.pause(10000)
    count = 10
    for (let index = 0; index < 11; index++) {
        basic.showNumber(count)
        count += -1
    }
}
let count = 0
let range: neopixel.Strip = null
let count2 = 0
let strip: neopixel.Strip = null
let Distance = 0
Distance = 7
radio.setGroup(199)
basic.showIcon(IconNames.No)
strip = neopixel.create(DigitalPin.P0, 3, NeoPixelMode.RGB)
strip.setBrightness(30)
RED()
count2 = 0
basic.forever(function () {
    Censor()
})
