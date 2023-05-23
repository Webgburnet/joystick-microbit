radio.setGroup(1)
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P0) > 600) {
        basic.showArrow(ArrowNames.North)
        radio.sendString("Av")
    } else if (pins.analogReadPin(AnalogPin.P0) < 300) {
        basic.showArrow(ArrowNames.South)
        radio.sendString("Ar")
    } else if (pins.analogReadPin(AnalogPin.P1) > 600) {
        basic.showArrow(ArrowNames.West)
        radio.sendString("G")
    } else if (pins.analogReadPin(AnalogPin.P1) < 300) {
        basic.showArrow(ArrowNames.East)
        radio.sendString("D")
    } else {
        basic.showIcon(IconNames.No)
        radio.sendString("S")
    }
})
