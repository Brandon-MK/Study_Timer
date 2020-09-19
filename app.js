console.log("**STUDY TIMER BY BRANDON_MK & DANIELJCODE**")
const timerDisplay = document.getElementById("display");

var secondsIn25mins = 1500;
var millisecondsIn25mins = 1500 * 1000

var secondsLeft = secondsIn25mins;


function Countdown(){

    console.log("------- STUDY TIMER INFO -------")

    secondsLeft = (secondsLeft - 1);
    console.log(`seconds left (In total): ${secondsLeft}`);

    var mind = secondsLeft % (60 * 60);
    var minutes = Math.floor(mind / 60);
    console.log(`Minutes left (In total):  ${minutes}`);

    var secd = secondsLeft % 60;
    var seconds = Math.ceil(secd);
    console.log(`seconds left (This cycle): ${seconds}`);

    DisplayDataToUser(seconds, minutes);

}setInterval(Countdown, 1000);

function DisplayDataToUser(secondslft, minuteslft){
 
     

    if(secondslft < 10){

        timerDisplay.innerHTML = `${minuteslft}:0${secondslft}`;//Adding a zero before the seconds if the seconds value is less than 10 (9, 8, 7, etc)

    }else{
        timerDisplay.innerHTML = `${minuteslft}:${secondslft}`;   
    }
}