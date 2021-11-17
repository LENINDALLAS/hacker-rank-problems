/*
 * Complete the 'angryProfessor' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY a
 */

function angryProfessor(k, a) {
    // Write your code here
    let value = { count: 0 }
    for (let student of a) {
        if (student <= 0) {
            value.count = value.count + 1;
        }
    }
    if (value.count >= k) {
        return 'NO'
    } else {
        return 'YES'
    }
} s