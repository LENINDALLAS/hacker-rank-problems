
/*
 * Complete the 'saveThePrisoner' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER m
 *  3. INTEGER s
 */

function saveThePrisoner(n, m, s) {
    // Write your code here
    const r = (((m + n) % n) + (s % n) - 1) % n
    return r == 0 ? n : ((r + n) % n)
}