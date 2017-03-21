class ReverseByWord {
    constructor(input) {
        this.input = input;
        this.output = input.split(' ').reverse().join(' ');
    }
    get reversed() {
        return this.output;
    }
}

module.exports = ReverseByWord;