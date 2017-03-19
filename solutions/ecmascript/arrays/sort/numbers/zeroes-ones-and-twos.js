class SortedOhOneTwoExtraSpace {
    constructor(unsorted) {
        this.unsorted = unsorted;
        this.sorted = [];
    }
    sort() {
        [0, 1, 2].forEach((item) => {
            const count = this.unsorted.filter(x => x === item).length;
            for (let i = 0; i < count; i++) {
                this.sorted.push(item);
            }
        });
        return this.sorted;
    }
}

class SortedOhOneTwoInPlace {
    constructor(unsorted) {
        unsorted.forEach((item, index, array) => {
            if (item === 0) {
                unsorted.unshift(unsorted.splice(index, 1).pop());
            }
            if (item === 2) {
                unsorted.push(unsorted.splice(index, 1).pop());
            }
        });
        return unsorted;
    }
}

module.exports = {
    Sort012InExtraSpace: SortedOhOneTwoExtraSpace,
    Sort0123InPlace: SortedOhOneTwoInPlace
}