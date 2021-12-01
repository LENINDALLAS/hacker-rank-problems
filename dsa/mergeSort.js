function merge(l, r) {
    let out = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < l.length && rightIndex < r.length) {
        if (l[leftIndex] < r[rightIndex]) {
            out.push(l[leftIndex]);
            leftIndex++;
        } else {
            out.push(r[rightIndex]);
            rightIndex++;
        }
    }

    return [...out, ...l.splice(leftIndex), ...r.splice(rightIndex)];
}



function mergeSort(arr) {
    if (arr.length === 1) {
        return arr;
    }

    let middle = Math.floor(arr.length / 2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle);

    let leftArr = mergeSort(left);
    let rightArr = mergeSort(right);
    return merge(leftArr, rightArr);
}


console.log(mergeSort([3, 4, 2, 8, 1]));