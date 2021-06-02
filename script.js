var hourHand = document.querySelector('.hour');
var minuteHand = document.querySelector('.minute');
var secondHand = document.querySelector('.second');


//logic for rotation system 

function setRotation(element,rotationRatio){
    element.style.setProperty('--rotation',rotationRatio*360);
}


//making function for logic rotation hand and time

function setClock(){
    var currentTime = new Date();
    var secondsRatio = currentTime.getSeconds()/60;
    var minutesRatio = (secondsRatio + currentTime.getMinutes())/60;
    var hourRatio = (minutesRatio + currentTime.getHours()) / 12;
    setRotation(secondHand,secondsRatio);
    setRotation(minuteHand,minutesRatio);
    setRotation(hourHand,hourRatio);
}


//starting clock 
setInterval(setClock,1000);

