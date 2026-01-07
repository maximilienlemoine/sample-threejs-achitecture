import { Timer } from "./utils/timer.ts";
import "./styles/timer.css";
import "./styles/counter.css";

console.info("Interface : READY");

const timer = new Timer((time: string) => {
    const timerElement = document.getElementById("timer");
    if (!timerElement) return;

    timerElement.innerText = time;
});

timer.start();

const timer_start = document.getElementById("timer-start");
const timer_stop = document.getElementById("timer-stop");
const timer_reset = document.getElementById("timer-reset");

if (timer_start) {
    timer_start.addEventListener("click", () => {
        timer.start();
    });
}

if (timer_stop) {
    timer_stop.addEventListener("click", () => {
        timer.stop();
    });
}

if (timer_reset) {
    timer_reset.addEventListener("click", () => {
        timer.reset();
    });
}
