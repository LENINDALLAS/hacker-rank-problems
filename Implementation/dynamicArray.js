/*
 * Complete the 'dynamicArray' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY queries
 */

function dynamicArray(n, queries) {
    // Write your code here
    const S = [];
    let lastAnswer = 0;
    let res = [];

    for (let i = 0; i < n; i++) {
        S[i] = [];
    }

    for (let j = 0; j < queries.length; j++) {
        let check = queries[j][0];
        let x = queries[j][1];
        let y = queries[j][2];
        const seq = ((x ^ lastAnswer) % n);
        //console.log(check)
        switch (check) {
            case 1:
                S[seq].push(y);
                break;
            case 2:
                const size = S[seq].length;
                const index = y % size;
                lastAnswer = S[seq][index];
                res.push(lastAnswer);
                break;
        };
    };

    return res;
}