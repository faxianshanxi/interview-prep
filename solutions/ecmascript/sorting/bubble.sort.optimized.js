function swapDefault(arr, i, j) {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

function shouldSwapDefault(arr, i) {
    return arr[i - 1] > arr[i];
}

function bubbleSort(arr, shouldSwapLogic, swapLogic) {
    let shouldSwap = shouldSwapLogic || shouldSwapDefault;
    let swap = swapLogic || swapDefault;
    let swapped;
    if (!arr || arr.length < 2) {
        return arr;
    }
    do {
        swapped = false;
        for (index = 1, len = arr.length; index < len; index++) {
            if (shouldSwap(arr, index)) {
                swap(arr, index - 1, index);
                swapped = true;
            }
        }
    } while (swapped);
    return arr;
}

module.exports = {
    bubbleSort
};