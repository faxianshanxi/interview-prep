class ReverseByWord {
    constructor(input) {
        this.input = input;
        this.output = input.split(' ').reverse().join(' ');
    }
    get reversed() {
        return this.output;
    }
}

const reverseByWord = (input) => input.split(' ').reverse().join(' ');

module.exports = {
    ReverseByWord,
    reverseByWord
};