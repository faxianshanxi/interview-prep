const ohOneTwo = require('./zeroes-ones-and-twos');
const SortedOhOneTwoInPlace = ohOneTwo.SortedOhOneTwoInPlace;
const SortedOhOneTwoExtraSpace = ohOneTwo.SortedOhOneTwoExtraSpace;

(() => {
    const runInPlace = (test) => {
        const actual = (new SortedOhOneTwoInPlace(test.input)).sort();
        const expected = test.output;
        const passed = JSON.stringify(actual) === JSON.stringify(expected);
        console.log(passed);
    };
    const runExtraSpace = (test) => {
        const actual = (new SortedOhOneTwoExtraSpace(test.input)).sort();
        const expected = test.output;
        const passed = JSON.stringify(actual) === JSON.stringify(expected);
        console.log(passed);
    };
    const tests = [
        { input: [0], output: [0] },
        { input: [0, 1, 2], output: [0, 1, 2] },
        { input: [0, 1, 0], output: [0, 0, 1] },
        { input: [0, 1, 0, 1, 2, 0, 0, 0, 1], output: [0, 0, 0, 0, 0, 1, 1, 1, 2] }
    ];

    tests.forEach(runInPlace);
    tests.forEach(runExtraSpace);
})();