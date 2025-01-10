input.onGesture(Gesture.Shake, function () {
    move = !(move)
    if (move) {
        CutebotPro.pwmCruiseControl(30, 30)
        basic.showIcon(IconNames.Sword)
    } else {
        CutebotPro.pwmCruiseControl(0, 0)
        basic.showIcon(IconNames.Square)
    }
})
let sonar = 0
let move = false
basic.showIcon(IconNames.Happy)
move = false
basic.forever(function () {
    sonar = CutebotPro.ultrasonic(SonarUnit.Centimeters)
    if (move) {
        if (sonar > 2 && sonar < 20) {
            CutebotPro.trolleySteering(CutebotProTurn.LeftInPlace, 90)
        } else {
            CutebotPro.pwmCruiseControl(30, 30)
        }
    }
})
