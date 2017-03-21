const Filter = require('./filter-function');

(() => {
    const testCasesExtraSpace = [{
            input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            predicate: x => x & 1 === 1,
            output: [1, 3, 5, 7, 9]
        },
        {
            input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            predicate: x => x % 2 === 0,
            output: [2, 4, 6, 8, 10]
        }
    ];
    const testCasesInPlace = [{
            input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            predicate: x => x & 1 === 1,
            output: [1, 3, 5, 7, 9],
            postActionInput: [1, 3, 5, 7, 9]
        },
        {
            input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            predicate: x => x % 2 === 0,
            output: [2, 4, 6, 8, 10],
            postActionInput: [2, 4, 6, 8, 10]
        }
    ];

    const run = () => {
        testCasesExtraSpace.forEach(test => {
            const filter = new Filter(test.predicate);
            const actual = filter.out(test.input);
            const expected = test.output;
            console.log(JSON.stringify(actual) === JSON.stringify(expected),
                JSON.stringify(actual) !== JSON.stringify(test.input));
        });
        testCasesInPlace.forEach(test => {
            const filter = new Filter(test.predicate);
            const actual = filter.out(test.input);
            const expected = test.output;
            console.log(JSON.stringify(actual) === JSON.stringify(expected),
                JSON.stringify(actual) === JSON.stringify(test.postActionInput));
        });
    };
    run();
})();