class Filter {
    constructor(filterPredicate) {
        this.predicate = filterPredicate;
    }
    out(input) {
        const output = [];
        input.forEach(item => {
            if (this.predicate(item)) {
                output.push(item);
            }
        });
        return output;
    }
    outInPlace(input) {
        for (let i = 0; i < input.length; i++) {
            if (!this.predicate(input[i])) {
                input.splice(i, 1);
                i--;
            }
        }
        return input;
    }
}

module.exports = Filter;