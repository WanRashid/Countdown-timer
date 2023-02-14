const daysEl = document.getElementById('days'); //It calls id=days in html here, need to declare with new name then call it.
const hoursEl = document.getElementById('hours'); //This one it calls hours
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById ('seconds');

const wedDay = "13 May 2023" //declare wedding date

function countdown() {
    const wedDayDate = new Date (wedDay);
    const currentDate = new Date();

    const totalSeconds = (wedDayDate - currentDate) / 1000; //wedDayDate - currentDate = miliseconds, that's why we divide by 1000

    const days = Math.floor(totalSeconds/ 3600 / 24); //The Math.floor() static method always rounds down and returns the largest integer less than or equal to a given number
    const hours = Math.floor(totalSeconds/3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = formatTime (days);
    hoursEl.innerHTML = formatTime (hours);
    minsEl.innerHTML = formatTime (mins);
    secondsEl.innerHTML = formatTime (seconds);

}

function formatTime(time){
    return time <10 ? `0${time}` : time;
}

//initial call
countdown();

setInterval(countdown, 1000);