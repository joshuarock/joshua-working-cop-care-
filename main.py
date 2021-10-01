dsitance = 0

def on_button_pressed_b():
    pass
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_gesture_shake():
    basic.show_number(randint(1, 6))
    for index in range(1000):
        Tinybit.car_ctrl_speed(Tinybit.CarState.CAR_RUN, 255)
        control.wait_micros(4)
        Tinybit.car_ctrl_speed(Tinybit.CarState.CAR_RUN, 255)
        control.wait_micros(4)
        Tinybit.car_ctrl_speed(Tinybit.CarState.CAR_RUN, 255)
        control.wait_micros(4)
        Tinybit.car_ctrl_speed(Tinybit.CarState.CAR_RUN, 255)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def on_forever():
    global dsitance
    dsitance = Tinybit.Ultrasonic_Car()
    if dsitance < 15:
        Tinybit.car_ctrl_speed(Tinybit.CarState.CAR_BACK, 80)
        basic.pause(200)
        Tinybit.car_ctrl_speed(Tinybit.CarState.CAR_SPINRIGHT, 100)
        basic.pause(200)
    else:
        Tinybit.car_ctrl_speed(Tinybit.CarState.CAR_RUN, 80)
basic.forever(on_forever)
