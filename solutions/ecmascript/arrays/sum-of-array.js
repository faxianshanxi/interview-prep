'use strict';

class SumOfArray {
    constructor(array) {
        this.array = array;
    }
    sum() {
        return this.array.reduce((p, c) => p + c, 0);
    }
    conditionalSum(condition) {
        return this.array.reduce((p, c, i, a) => condition(c, p, i, a) ? p + c : p, 0);
    }
}

if(module) {
    module.exports = SumOfArray;
}
