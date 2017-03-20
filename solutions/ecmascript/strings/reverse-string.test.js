const reverse = require('./reverse-string');

const testCases = [
    { input: 'Faxian', output: 'naixaF' },
    { input: 'faxian', output: 'naixaf' },
    { input: 'Faxian Shanxi', output: 'ixnahS naixaF' },
    { input: 'ABC', output: 'CBA' },
    { input: 'wut wut?', output: '?tuw tuw' }
];

const run = () => {
    testCases.forEach(test => {
        const actual = reverse(test.input);
        const expected = test.output;
        console.log(actual === expected);
    });
    testCases.forEach(test => {
        const actual = reverse(reverse(test.input));
        const expected = test.input;
        console.log(actual === expected);
    })
};