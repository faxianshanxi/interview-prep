class Range {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
    sum() {
        // The Gauss Sum - https://en.wikipedia.org/wiki/Gauss_sum
        const startNumber = this.start * (this.start - 1) / 2;
        const endNumber = this.end * (this.end + 1) / 2;
        return endNumber - startNumber;
    }
    findMissingNumber(arr) {
        const sum = arr.reduce((prev, curr) => prev + curr, 0);
        return this.sum() - sum;
    }
}

if(module) {
    module.exports = Range;
}
