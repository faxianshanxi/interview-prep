const SumOfArray = require('./sum-of-array');

function runTest(test) {
    var soa = new SumOfArray(test.input);
    const actual = soa.sum();
    const expected = test.output;
    console.log(`actual: ${actual}, expected: ${expected}`);
    console.log(`actual === expected: ${actual === expected}`);
}

function runConditionalTest(test) {
    var soa = new SumOfArray(test.input);
    const actual = soa.conditionalSum(test.condition);
    const expected = test.output;
    console.log(`actual: ${actual}, expected: ${expected}`);
    console.log(`actual === expected: ${actual === expected}`);
}

(function testSumOfArray() {
    const testCases = [
        { input: [0], output: 0 },
        { input: [], output: 0 },
        { input: [1, 2, 3], output: 6 },
        { input: [-1, 0, 1], output: 0 },
        { input: [-1, -2, -3], output: -6 }
    ];
    testCases.forEach(runTest);
    const conditionalCases = [
        { input: [0], condition: x => !x, output: 0 },
        { input: [], condition: x => !x, output: 0 },
        { input: [1, 2, 3], condition: x => !x, output: 0 },
        { input: [-1, 0, 1], condition: x => !x, output: 0 },
        { input: [-1, -2, -3], condition: x => !x, output: 0 },
        { input: [0], condition: x => !!x, output: 0 },
        { input: [], condition: x => !!x, output: 0 },
        { input: [1, 2, 3], condition: x => !!x, output: 6 },
        { input: [-1, 0, 1], condition: x => !!x, output: 0 },
        { input: [-1, -2, -3], condition: x => !!x, output: -6 },
        { input: [1, 2, 3], condition: (x, y) => x + y <= 5, output: 3 },
        { input: [-1, -2, -3], condition: (x, y) => x + y >= -5, output: -3 }
    ];
    conditionalCases.forEach(runConditionalTest);
})();