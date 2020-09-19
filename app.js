console.log("**STUDY TIMER BY BRANDON_MK & DANIELJCODE**")
const timerDisplay = document.getElementById("display");
const startStop = document.getElementById("buttonIDHERE"); //TODO add the button id once it gets added to the html

var secondsIn25mins = 1500;
var secondsLeft = secondsIn25mins;

var isNotAtZero = true; //Setting this to true on load;


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
    CheckIfAtZero();

}setInterval(Countdown, 1000);

function DisplayDataToUser(secondslft, minuteslft){
 
     
    if(secondslft < 10){

        timerDisplay.innerHTML = `${minuteslft}:0${secondslft}`;//Adding a zero before the seconds if the seconds value is less than 10 (9, 8, 7, etc)

    }else{
        timerDisplay.innerHTML = `${minuteslft}:${secondslft}`;   
    }
}


function CheckIfAtZero(){

    if(secondsLeft == 0){

        console.log("STOPPED");

    }

}

startStop.addEventListener("click" ()=>{

    //THE START BUTTON WAS CLICKED
    //TODO
        //CHANGE THE START BUTTON INTO THE STOP BUTTON ONCE CLICKED
        //START THE COUNTDOWN

})