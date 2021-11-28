function binarySearch(arr, item) {
    let min = 0;
    let max = arr.length - 1;
    let guess;

    while (min <= max) {
        guess = Math.floor((min + max) / 2);
        if (arr[guess] === item) {
            return guess;
        } else if (arr[guess] < item) {
            min = min + 1;
        } else {
            max = max - 1;
        }
    }

    return 'item is not present';
}

binarySearch([2, 4, 5, 6, 11], 6);