/*
 * Complete the 'permutationEquation' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY p as parameter.
 */

function permutationEquation(p) {
    // Write your code here
    const acc = [];
    const hash = {};
    for (let i = 1; i <= p.length; i++) {
        hash[p[i - 1]] = i;
    }
    for (let j = 1; j <= p.length; j++) {
        const first = hash[j];
        const second = hash[first];
        acc.push(second);
    }
    return (acc)
}
