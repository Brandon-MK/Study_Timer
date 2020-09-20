console.log("**STUDY TIMER BY BRANDON_MK & DANIELJCODE**")
const timerDisplay = document.getElementById("display");
const startStop = document.getElementById("buttonIDHERE"); //TODO add the button id once it gets added to the html

const inputMins = document.querySelector("input");
const shortBreak = document.getElementById("shortlong");

let secondsLeft;
let isNotAtZero = true; //Setting this to true on load;
let refreshIntervalId;
let isRunning = false

function Countdown(){
    console.log("------- STUDY TIMER INFO -------")

    secondsLeft = (secondsLeft - 1);
    console.log(`seconds left (In total): ${secondsLeft}`);

    const mind = secondsLeft % (60 * 60);
    const minutes = Math.floor(mind / 60);
    console.log(`Minutes left (In total):  ${minutes}`);

    const secd = secondsLeft % 60;
    const seconds = Math.ceil(secd);
    console.log(`seconds left (This cycle): ${seconds}`);

    DisplayDataToUser(seconds, minutes);
    CheckIfAtZero();

}

function DisplayDataToUser(secondslft, minuteslft){
 
     
    if(secondslft < 10){

        timerDisplay.innerHTML = `${minuteslft}:0${secondslft}`;//Adding a zero before the seconds if the seconds value is less than 10 (9, 8, 7, etc)
        document.title = `STUDY TIMER - ${minuteslft}:0${secondslft}`;

    }else{
        timerDisplay.innerHTML = `${minuteslft}:${secondslft}`;  
        document.title = `STUDY TIMER - ${minuteslft}:${secondslft}`
    }
}


function CheckIfAtZero(){

    if(secondsLeft <= 0){

        console.log("STOPPED");
        clearInterval(refreshIntervalId);

        alert("TIMES UP! your break timer will now start automatically!")

        if(!shortBreak.checked){
            //THE USER HAS OPTED FOR A SHORT BREAK
            secondsLeft = 300; //FIVE MINUTES

        }else{
            //THE USER HAS OPTED FOR A LONG BREAK
            secondsLeft = 600; //TEN MINUTES

        }

        refreshIntervalId = setInterval(Countdown, 1000);
    }
}

function Start(){
    //does not start new interval if 
    if (isRunning) {
        return;
    }
    isRunning = true

    if(inputMins.value == 0 && !(secondsLeft > 1)){
        
        //IF NO VALUE IS INPUTTED GOING WITH 25 MINUTES AS DEFUALT
        secondsLeft = 1500;

    }
    else if(inputMins.value >= 1){

        //THE USER HAS ENTERED A VALUE OF MINUTES

        secondsLeft = Math.ceil(inputMins.value * 60);
        inputMins.value = 0;
    }else if(secondsLeft > 1){

        //THE TIMER HAS BEEN STOPED AND THE USER HAS REQUESTED TO START IT AGAIN FROM WHERE THEY WERE
        clearInterval(refreshIntervalId);
    }

    refreshIntervalId = setInterval(Countdown, 1000);
    inputMins.value = null;

}

function Stop(){
    isRunning = false
    clearInterval(refreshIntervalId);

}