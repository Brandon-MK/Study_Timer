const timerDisplay = document.getElementById("display");

var secondsIn25mins = 1500;
var millisecondsIn25mins = 1500 * 1000

var secondsLeft = secondsIn25mins;


function Countdown(){

    secondsLeft = (secondsLeft - 1);
    console.log(`seconds left: ${secondsLeft}`);

    var mind = secondsLeft % (60 * 60);
    var minutes = Math.floor(mind / 60);
    //console.log(minutes);

    var secd = secondsLeft % 60;
    var seconds = Math.ceil(secd);
    console.log(seconds);

}setInterval(Countdown, 1000);
