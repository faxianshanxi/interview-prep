'use strict';

function removeSpaces(input) {
    return input.split(' ').join('');
}

if(module) {
    module.exports = removeSpaces;
}
