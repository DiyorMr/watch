var inc = 1000;
clock();

function clock() {
    const date = new Date();
    const hours = ((date.getHours() + 11) % 12 + 1);
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const hour = hours * 30;
    const minute = minutes * 6;
    const second = seconds * 6;
    const h = (hours < 10) ? "0" + hours : hours;
    const m = (minutes < 10) ? "0" + minutes : minutes;
    document.querySelector('.hours').innerHTML = h;
    document.querySelector('.mins').innerHTML = m;
    document.querySelector('.hour').style.transform = `rotate(${hour}deg)`
    document.querySelector('.minute').style.transform = `rotate(${minute}deg)`
    document.querySelector('.second').style.transform = `rotate(${second}deg)`
}

setInterval(clock,inc);

// day of week

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];


const d = new Date();
let day = weekday[d.getDay()];
document.getElementById("weekDay").innerHTML = day;
document.getElementById("weekDayCopy").innerHTML = day;

// Month name
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const date = new Date();
let nameMonth = month[date.getMonth()];
document.getElementById("monthName").innerHTML = nameMonth;
document.getElementById("monthNameCopy").innerHTML = nameMonth;