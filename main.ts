let estadoAlarma = 0
radio.setGroup(15)
basic.forever(function () {
    radio.sendNumber(estadoAlarma)
    if (input.magneticForce(Dimension.Strength) < 200) {
        estadoAlarma = 1
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # #
            # # # . #
            . . # . #
            `)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
    } else if (input.magneticForce(Dimension.Strength) >= 199) {
        estadoAlarma = 0
        basic.clearScreen()
    }
})
