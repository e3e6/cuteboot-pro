let sonar = 0
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    sonar = CutebotPro.ultrasonic(SonarUnit.Centimeters)
    if (sonar > 2 && sonar < 20) {
    	
    } else {
    	
    }
})
