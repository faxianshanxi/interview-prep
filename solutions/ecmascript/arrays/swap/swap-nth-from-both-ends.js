const swapNthFromBothEnds = (input, pos) => {
    const len = input.length;
    const temp = input[len - pos];
    input[len - pos] = input[pos - 1];
    input[pos - 1] = temp;
    return input;
};

module.exports = swapNthFromBothEnds;