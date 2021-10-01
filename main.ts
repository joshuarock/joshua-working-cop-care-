let dsitance = 0
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 10000000000000000000; index++) {
        if (dsitance < 18) {
            basic.showLeds(`
                # . . . #
                . # . # .
                . . # . .
                . # . . .
                # . . . .
                `)
        } else {
            basic.showLeds(`
                # . . . #
                # . . . #
                # . . . #
                # . . . #
                # # # # #
                `)
        }
    }
})
input.onButtonPressed(Button.B, function () {
	
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(randint(1, 6))
})
basic.forever(function () {
    dsitance = Tinybit.Ultrasonic_Car()
    if (dsitance < 18) {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Back, 56)
        basic.pause(200)
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_SpinRight, 105)
        basic.pause(200)
    } else {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 255)
        music.playMelody("C5 A C5 A C5 A C5 A ", 120)
        music.playMelody("C5 A C5 A C5 A C5 A ", 120)
        music.playMelody("C5 A C5 A C5 A C5 A ", 120)
        music.playMelody("C5 A C5 A C5 A C5 A ", 120)
        music.playMelody("C5 A C5 A C5 A C5 A ", 120)
    }
})
