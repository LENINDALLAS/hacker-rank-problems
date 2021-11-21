/*
 * Complete the 'circularArrayRotation' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER k
 *  3. INTEGER_ARRAY queries
 */

function circularArrayRotation(a, k, queries) {
    // Write your code here
    let result = [];
    for (let i = 0; i < k; i++) {
        let poped = a.pop();
        a.unshift(poped);
    }
    for (let item of queries) {
        result.push((a[item]));
    }
    return result;
}