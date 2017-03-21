const ReverseByWord = require('./reverse-string-by-words');

(() => {
    const testCases = [
        { input: 'Eh Whats up doc?', output: 'doc? up Whats Eh' },
        { input: 'abcd', output: 'abcd' },
        { input: 'abc def ghi jkl', output: 'jkl ghi def abc' },
        { input: 'What\'s going on folks?', output: 'folks? on going What\'s' },
        { input: 'bugs and jenny', output: 'jenny and bugs' },
        { input: 'I warned you!', output: 'you! warned I' }
    ];
    const run = (test) => {
        const actual = new ReverseByWord(test.input).reversed;
        const expected = test.output;
        console.log(actual === expected);
    }
    testCases.forEach(run);
})();