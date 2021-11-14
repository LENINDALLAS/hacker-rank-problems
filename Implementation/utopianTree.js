/*
 * Complete the 'utopianTree' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

function utopianTree(n) {
    // Write your code here
    let spring = true;
    let growth = 1;
    for (let i = n; i > 0; i--) {
        if (spring) {
            growth *= 2;
            spring = false;
        } else {
            growth += 1;
            spring = true;
        }
    }
    return (growth)
}