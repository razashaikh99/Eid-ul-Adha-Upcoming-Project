var countdownElement = document.querySelector('.container');
var endDate = new Date('2024-06-16T00:00:00');
var now = new Date();

var difference = endDate - now;
var days = Math.floor(difference / (1000 * 60 * 60 * 24));
var hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
var minutes = Math.floor((difference / (1000 * 60)) % 60);
var seconds = Math.floor((difference / 1000) % 60);

document.getElementById('days').textContent = days;
document.getElementById('hours').textContent = hours;
document.getElementById('minutes').textContent = minutes;
document.getElementById('seconds').textContent = seconds;

setInterval(() => {
    var now = new Date();
    var difference = endDate - now;
    var days = Math.floor(difference / (1000 * 60 * 60 * 24));
    var hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    var minutes = Math.floor((difference / (1000 * 60)) % 60);
    var seconds = Math.floor((difference / 1000) % 60);

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}, 1000);