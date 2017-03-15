# convert a string to alpha only lowercase

```
    "Thanks" // => "thanks"
    "Why :) So seRious?" // => "whysoserious"
    " x y " // => "xy"
    "  X  y  " // => "xy"
```

## code - ecmascript

```
    function convertToLowerAlphaOnly(input) {
        return input.split('').map((x) => {
            x = x.toLowerCase();
            if(x >= 'a' && x <= 'z') {
                return x;
            }
        }).filter(x => x).join('');
    }

    (function test() {
        const testCases = [
            { input: 'x', output: 'x' },
            { input: 'X', output: 'x' },
            { input: 'T? x', output: 'tx' },
            { input: 'Thanks!', output: 'thanks' },
            { input: 'Why :( so SerIous?', output: 'whysoserious' },
            { input: 'Dude!!! Where\'s MY CAR???', output: 'dudewheresmycar' }
        ];
        testCases.forEach( x => {
            let actual = convertToLowerAlphaOnly(x.input);
            const testCase = `Case: '${x.input}', expected output: '${x.output}'`;
            const output = `case result: ${actual === x.output}`;
            console.log(`${testCase}, actual: '${actual}', ${output}`);
        });
    })();
```
