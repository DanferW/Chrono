var sec = 0;
var min = 0;
var hrs = 0;
var t;
var x = false;
var stopboolean = false;
var durationStart = 0;
var durationStop = 0;
var booleanDuration = false;
function tiempo() {
    t = setTimeout(tick, 1000);
}

function tick() {
    sec++;
    if (sec >= 60) {
        sec = 0;
        min++;
        if (min >= 60) {
            min = 0;
            hrs++;
        }
    }
    var tiempo1 = document.getElementById("tiempo");
    tiempo1.innerHTML =
        (hrs > 9 ? hrs : "0" + hrs) +
        ":" +
        (min > 9 ? min : "0" + min) +
        ":" +
        (sec > 9 ? sec : "0" + sec);

    tiempo();
}

function iniciar() {
    error();
    x = true;
    if (booleanDuration == false) {
        duration();
    }
    booleanDuration = true;
}

function error() {
    if (x === true) {
        alert("Error");
    } else {
        tick();
        durationStart = 0;

    }
}

function parar() {
    if (x === false) {
        alert("Error");
    } else {
        x=false;
        clearTimeout(t);
        stopboolean = true;
        durationStop = 0;

    }

}
function reiniciar() {
    sec = 0;
    min = 0;
    hrs = 0;
    var tiempo1 = document.getElementById("tiempo");
    tiempo1.innerHTML = "00:00:00";
    clearTimeout(t);
    x=false;
}

function duration() {
    durationStart++;
    document.getElementById("start").innerHTML = "Ultima vez iniciado: " + durationStart + "s";
    if (stopboolean === true) {
        durationStop++;
        document.getElementById("stop").innerHTML = "Ultima vez detenido: " + durationStop + "s";
    }
    setTimeout(duration, 1000);
}
