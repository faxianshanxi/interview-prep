'use strict';

require('rootpath')();
const findHighestProductOfThree = require('./findHighestProductOfThree');

function runTestCase(c) {
    var outcome = findHighestProductOfThree(c.input) === c.output ? 'SUCCESS' : 'FAILURE';
    console.log(`For [ ${c.input.join(', ')} ], expected output = ${c.output} | ${outcome}`);
}

(function test() {
    var obviousTestCases = [
        { input: [ 1 ], output: 1 },
        { input: [ 0 ], output: 0 },
        { input: [ 0, 1 ], output: 0 },
        { input: [ 0, -1 ], output: 0 },
        { input: [ -1, 1 ], output: -1 },
        { input: [ -2, 2 ], output: -4 },
        { input: [ -3, -2, -1 ], output: -6 },
        { input: [ -3, -2, 0 ], output: 0 }
    ];
    obviousTestCases.forEach(runTestCase);
    var testCases = [
        { input: [-10, 7, 29, 30, 5, -10, -70], output: 21000 },
        { input: [-10, 7, 29, 30, 5, -10, 70], output: 60900 },
        { input: [-10, 7, 29, 30, 5, 10, -70], output: 21000 },
        { input: [-10, 7, 29, -30, 5, -10, -70], output: 60900 },
        { input: [-10, 7, 29, -30, 5, 10, -70], output: 60900 }
    ];
    testCases.forEach(runTestCase);
})();
