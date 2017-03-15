# Find missing number in given range

## code - ecmascript

```
    class Range {
        constructor(start, end) {
            this.start = start;
            this.end = end;
        }
        sum () {
            // Gauss Sum - https://en.wikipedia.org/wiki/Gauss_sum
            const startNumber = this.start * (this.start - 1)  / 2;
            const endNumber = this.end * (this.end + 1) / 2;
            return endNumber - startNumber;
        }
        findMissingNumber(arr) {
            const sum = arr.reduce((prev, curr) => prev + curr, 0);
            return this.sum() - sum;
        }
    }

    function runTest(test) {
        const range = new Range(test.input.start, test.input.end);
        const actual = range.findMissingNumber(test.input.in);
        const expected = test.output;
        console.log(`actual: ${actual}, expected: ${expected}`);
        console.log(`actual === expected: ${actual === expected}`);
    }

    const testCases = [
        {
            input: {
                start: 1, end: 10, in: [1, 2, 3, 4, 5, 6, 7, 8, 9]
            },
            output: 10
        },
        {
            input: {
                start: 1, end: 10, in: [1, 2, 3, 4, 5, 6, 7, 8, 10]
            },
            output: 9
        },
        {
            input: {
                start: 1, end: 10, in: [1, 3, 4, 5, 6, 7, 8, 9, 10]
            },
            output: 2
        }
    ];
    testCases.forEach(runTest);
```