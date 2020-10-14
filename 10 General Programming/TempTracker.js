class TempTracker {
    constructor() {
        this.temps = {};
        this.num = 0;
        this.min = null;
        this.max = null;
        this.mean = null;
        this.mode = null;
        this.highestNumOfTimesATempAppears = 0;
    }

    insert(temp) {

        if (this.num === 0) {
            this.temps[temp] = 1;
            this.min = temp;
            this.max = temp;
            this.mean = temp;
            this.mode = temp;
            this.highestNumOfTimesATempAppears = 1;
        }
        else {
            if (this.temps[temp]) {
                this.temps[temp] += 1;
            }
            else {
                this.temps[temp] = 1;
            }
            if (this.min > temp) {
                this.min = temp;
            }
            if (this.max < temp) {
                this.max = temp;
            }
            const prevTotal = this.mean * this.num;
            const newTotal = prevTotal + temp;
            this.mean = Math.floor(newTotal / (this.num + 1));
            if (this.temps[temp] > this.highestNumOfTimesATempAppears) {
                this.mode = temp;
                this.highestNumOfTimesATempAppears += 1;
            }
        }

        this.num += 1;

    }

    getMax() {
        return this.max;
    }

    getMin() {
        return this.min;
    }

    getMean() {
        return this.mean;
    }

    getMode() {
        return this.mode;
    }
}

const tt = new TempTracker();
tt.insert(110);
tt.insert(45);
tt.insert(45);
tt.insert(110);
tt.insert(110);
tt.insert(21);
console.log(tt.getMax(), tt.getMin(), tt.getMean(), tt.getMode());