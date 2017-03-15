'use strict';

function sumOfArray(array) {
    return array.reduce((prev, curr) => prev + curr, 0);
}

if(module) {
    module.exports = sumOfArray;
}
