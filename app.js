console.log("**STUDY TIMER BY BRANDON_MK & DANIELJCODE**")
const timerDisplay = document.getElementById("display");
const startStop = document.getElementById("buttonIDHERE"); //TODO add the button id once it gets added to the html

const inputMins = document.querySelector("input")


var secondsLeft;
var isNotAtZero = true; //Setting this to true on load;
var refreshIntervalId;

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

}

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
        clearInterval(refreshIntervalId);

        alert("TIMER FINISHED, TAKE A BREAK AND COME BACK IN A FEW MINUTES! :D :P")
    }

}

function Start(){

    if(inputMins.value == 0 && !(secondsLeft > 1)){
        
        //IF NO VALUE IS INPUTTED GOING WITH 25 MINUTES AS DEFUALT
        secondsLeft = 1500;

    }
    else if(inputMins.value >= 1){

        //THE USER HAS ENTERED A VALUE OF MINUTES

        secondsLeft = Math.ceil(inputMins.value * 60);
    }else if(secondsLeft > 1){

        //THE TIMER HAS BEEN STOPED AND THE USER HAS REQUESTED TO START IT AGAIN FROM WHERE THEY WERE

    }

    refreshIntervalId = setInterval(Countdown, 1000);
    inputMins.value = null;

}

function Stop(){


    clearInterval(refreshIntervalId);

}