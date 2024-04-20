(function () {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    const eventday = "May 14, 2024 00:00:00";
    const countDown = new Date(eventday).getTime(),
        x = setInterval(function () {
            const now = new Date().getTime(),
                distance = countDown - now;

            (document.getElementById("days").innerText = Math.floor(
                distance / day
            )),
                (document.getElementById("hours").innerText = Math.floor(
                    (distance % day) / hour
                )),
                (document.getElementById("minutes").innerText = Math.floor(
                    (distance % hour) / minute
                )),
                (document.getElementById("seconds").innerText = Math.floor(
                    (distance % minute) / second
                ));

            //do something later when date is reached
            if (distance < 0) {
                document.getElementById("headline").innerText =
                    "DEADLINE HAS PASSED!!";
                document.getElementById("countdown").style.display = "none";
                document.getElementById("content").style.display = "block";
                clearInterval(x);
            }
            //seconds
        }, 0);
})();

const ball1 = document.querySelector(".ball1");
const ball2 = document.querySelector(".ball2");
const ball3 = document.querySelector(".ball3");
const ball4 = document.querySelector(".ball4");
const ball5 = document.querySelector(".ball5");

function moveBall(ball) {
    const xPosition = Math.random() * window.innerWidth;
    const yPosition = Math.random() * window.innerHeight;

    ball.style.left = `${xPosition}px`;
    ball.style.top = `${yPosition}px`;
}

setInterval(() => {
    moveBall(ball1);
    moveBall(ball2);
    moveBall(ball3);
    moveBall(ball4);
    moveBall(ball5);
}, 5000);
