# Sum of all the elements in an array


## code - ecmascript

```
    function sumOfArray(array) {
        return array.reduce((prev, curr) => prev + curr, 0);
    }

    function runTest(test) {
        const actual = sumOfArray(test.input);
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
            { input: [-1, -2, -3], output: 6 }
        ];
        testCases.forEach(runTest);
    })();
```