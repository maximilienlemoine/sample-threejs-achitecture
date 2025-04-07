export class Counter {
    private readonly id: string;
    private count: number = 0;

    constructor(id: string) {
        this.id = id;
    }

    public increment() {
        this.count++;
        this.returnCount();
    }

    public decrement() {
        this.count--;
    }

    public reset() {
        this.count = 0;
    }

    public getCount() {
        return this.count;
    }

    public returnCount() {
        const counterElement = document.getElementById(this.id);
        if (!counterElement) return;

        counterElement.innerText = this.getCount().toString();
    }
}
