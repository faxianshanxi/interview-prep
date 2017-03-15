const convertToLowerAlphaOnly = reqiure('./convert-to-alphaonly-lowercase');

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