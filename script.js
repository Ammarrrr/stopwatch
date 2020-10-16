var min = 0;
var sec = 0;
var msec = 0;

var minHeading = document.getElementById('min');
var secHeading = document.getElementById('sec');
var msecHeading = document.getElementById('msec');

var interval;

function timer() {
    msec++
    msecHeading.innerHTML = msec;
    if (msec >= 100) {
        sec++
        secHeading.innerHTML = sec;
        msec = 0;
    }
    else if (sec >= 10) {
        min++
        minHeading.innerHTML = min;
        sec = 0
    }

}

function start() {

    interval = setInterval(timer, 10)
    document.getElementById('start').disabled = true; 
}

function stop() {
    clearInterval(interval)
    document.getElementById('start').disabled = false; 

}

function reset() {
    minHeading.innerHTML = 0;
    secHeading.innerHTML = 0;
    msecHeading.innerHTML = 0;
    clearInterval(interval);
    document.getElementById('start').disabled = false; 


}