
var hoursElement = document.getElementById("hours");
var minutesElement = document.getElementById("minutes");
var secondsElement = document.getElementById("seconds");
// console.log(hoursElement.innerHTML);
var hours = 0;
var minutes = 0;
var seconds = 0;
//inithiate values in html elements
hoursElement.innerHTML = hours;
minutesElement.innerHTML = minutes;
secondsElement.innerHTML = seconds;

var isTimerPaused = false;
var statusTimerElement = document.getElementById("statusTimer");
function startingTheTimer() {
    // i need to encrease second each time interval is
    //pressing start after pause must be working    bause--->delete----->start dont work   i'll solve this by checking if the values are zeroes then the paused flag will be false
    if (hours == 0 && minutes == 0 && seconds == 0) {
        isTimerPaused = false;// solution of bause--->delete----->start
    }
    if (!isTimerPaused) {// if the timer is not paused
        statusTimerElement.innerHTML = "Pause Timer";
        statusTimerElement.onclick = pauseTimer;
        timerObject = setInterval(
            function () {
                seconds++;
                secondsElement.innerHTML = seconds;
                if (seconds >= 60) {
                    seconds = 0;
                    minutes++;
                    minutesElement.innerHTML = minutes;
                    if (minutes >= 60) {
                        minutes = 0;
                        hours++;
                        hoursElement.innerHTML = hours;
                    }
                }

                if (isTimerPaused) {//stop the interval but the values of hours, minutes ,seconds are stored
                    clearInterval(timerObject);
                    // console.log(seconds);
                    statusTimerElement.innerHTML = "Continue Timer";
                    statusTimerElement.onclick = continueTimer;
                }

            }
            , 1000);

    }
}

function clearTimer() {
    var clear = confirm("are You sure you want to clear the timer?");
    if (clear) {
        hours = 0;
        minutes = 0;
        seconds = 0;
        hoursElement.innerHTML = hours;
        minutesElement.innerHTML = minutes;
        secondsElement.innerHTML = seconds;
        // remove the object
        clearInterval(timerObject);
    }
}

function pauseTimer() {
    console.log("im pause timer function");
    isTimerPaused = true;//it will only change this flag status , then the code willcontinue in startTheTimer Function
}
function continueTimer() {
    isTimerPaused = false;//it will only change this flag status , then the code willcontinue in startTheTimer Function
    startingTheTimer();
}

