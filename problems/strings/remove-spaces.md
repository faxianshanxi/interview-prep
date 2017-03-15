# Remove spaces from a string

```
    " x" // => "x"
    "x " // => "x"
    " x y " // => "xy"
    "  x  y  " // => "xy"
```

## code - ecmascript

```
    function removeSpaces(input) {
        return input.split(' ').join('');
    }

    (function test() {
        const testCases = [
            { input: 'x', output: 'x' },
            { input: ' x', output: 'x' },
            { input: 'x ', output: 'x' },
            { input: ' x ', output: 'x' },
            { input: '      x      ', output: 'x' },
            { input: '   x   y   ', output: 'xy' }
        ];
        testCases.forEach( x => {
            let actual = removeSpaces(x.input);
            const testCase = `Case: '${x.input}', expected output: '${x.output}'`;
            const output = `case result: ${actual === x.output}`;
            console.log(`${testCase}, actual: '${actual}', ${output}`);
        });
    })();
```
