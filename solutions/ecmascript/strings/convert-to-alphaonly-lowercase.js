'use strict';

function convertToLowerAlphaOnly(input) {
    return input.split('').map((x) => {
        x = x.toLowerCase();
        if(x >= 'a' && x <= 'z') {
            return x;
        }
    }).filter(x => x).join('');
}

if(module) {
    module.exports = removeSpaces;
}