'use strict';

function findHighestProductOfThree(arr) {
    if (arr.length <= 3) {
        return arr.reduce((prev, curr) => prev * curr, 1);
    }
    arr.sort((curr, next) => curr - next);
    var length = arr.length;
    var minProduct = arr[0] * arr[1] * arr[length - 1];
    var maxProduct = arr[length - 1] * arr[length - 2] * arr[length - 3];
    return minProduct > maxProduct ? minProduct : maxProduct;
}

module.exports = findHighestProductOfThree;