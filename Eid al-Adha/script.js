var targetDate = new Date("May 26, 2026 00:00:00").getTime();

var updateTimer = setInterval(function() {
    var now = new Date().getTime();
    var timeLeft = targetDate - now;

    var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));

    var display = document.getElementById("countdown-display");
    display.innerHTML = days + "d " + hours + "h " + minutes + "m";

    if (timeLeft < 0) {
        clearInterval(updateTimer);
        display.innerHTML = "Eid Mubarak!";
    }
}, 1000);