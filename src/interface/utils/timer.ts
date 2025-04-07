export class Timer {
    private startTime: number;
    private elapsedTime: number;
    private timerInterval: number | undefined;
    private readonly displayCallback: (time: string) => void;

    constructor(displayCallback: (time: string) => void) {
        this.startTime = 0;
        this.elapsedTime = 0;
        this.displayCallback = displayCallback;
    }

    start() {
        if (this.timerInterval) return;
        this.startTime = Date.now() - this.elapsedTime;
        this.timerInterval = setInterval(() => {
            this.elapsedTime = Date.now() - this.startTime;
            this.display();
        }, 100);
    }

    stop() {
        clearInterval(this.timerInterval);
        this.timerInterval = undefined;
    }

    reset() {
        this.stop();
        this.elapsedTime = 0;
        this.display();
    }

    display() {
        const totalSeconds = Math.floor(this.elapsedTime / 1000);
        const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
        const seconds = String(totalSeconds % 60).padStart(2, "0");
        if (this.displayCallback) {
            this.displayCallback(`${minutes}:${seconds}`);
        }
    }
}
