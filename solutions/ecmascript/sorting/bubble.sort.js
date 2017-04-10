function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (j = 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let tmp = arr[i];
                arr[i] = arr[j];
                arr[j] = tmp;
            }
        }
    }
}

module.exports = {
    bubbleSort
};