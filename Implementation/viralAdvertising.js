/*
 * Complete the 'viralAdvertising' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

function viralAdvertising(n) {
    // Write your code here
    let shared = 5;
    let likes = 0;
    let liked = 0;
    for (let i = 0; i < n; i++) {
        likes = Math.floor(shared / 2);
        liked += likes;
        shared = likes * 3;
    }
    return liked;
}