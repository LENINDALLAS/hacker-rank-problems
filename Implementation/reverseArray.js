//  *
//  * The function is expected to return an INTEGER_ARRAY.
//  * The function accepts following parameters:
//  * 1. INTEGER d
//     * 2. INTEGER_ARRAY arr
//         * /

function rotateLeft(d, arr) {
    // Write your code here
    for (let i = 0; i < d; i++) {
        let temp = arr.shift();
        arr.push(temp);
    };
    return (arr)
}