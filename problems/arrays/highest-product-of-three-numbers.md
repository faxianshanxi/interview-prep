# Highest product of three numbers in an array.

```
    [-1, 1, 2, 3] // 6
    [-1, -1, 2, 3] // 3
```

## code - ecmascript

```
    function findHighestProductOfThree(arr) {
        if(arr.length <= 3) {
            return arr.reduce((prev, curr) => prev * curr, 1);
        }
        arr.sort((curr, next) => curr - next);
        var length = arr.length;
        var minProduct = arr[0] * arr[1] * arr[length - 1];
        var maxProduct = arr[length - 1] * arr[length - 2] * arr[length - 3];
        return minProduct > maxProduct ? minProduct : maxProduct;
    }

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
```