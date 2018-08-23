
let seconds = 0, minutes = 0, hours=0;
let nIntervId = setInterval(interval,1000);
let Highscore = document.getElementById("highscore");
let secondsString;
Highscore.innerText = localStorage.getItem("lasttime");

function interval(){
    seconds++
    if (seconds>= 60){
        seconds = 0;
        minutes++;
        if (minutes>=60){
            minutes = 0;
            hours ++;
        }
    }
    displaytime();
    StoreHighScore();
}

function displaytime(){
    if (minutes==0 && hours==0){
        document.getElementById("currentscore").innerHTML=(seconds > 9 ? seconds : "0" + seconds);
        }
        else if (hours==0){
        document.getElementById("currentscore").innerHTML=(minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
        }
        else{
        document.getElementById("currentscore").innerHTML=(hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
        }
}

function StoreHighScore(){
    if (seconds<10){
        secondsString ="0"+ seconds.toString();
    }
    else{
        secondsString = seconds.toString();
    }
    console.log(secondsString);
    let minutesString = minutes.toString();
    let hoursString = hours.toString();
    
    let totaltime = hoursString +":"+minutesString+":"+secondsString
    console.log(totaltime);
    if(totaltime>localStorage.getItem("lasttime")){    
    localStorage.setItem ("lasttime",totaltime);
    }
    
    
    
};