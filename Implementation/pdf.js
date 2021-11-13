/*
 * Complete the 'designerPdfViewer' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY h
 *  2. STRING word
 */

function designerPdfViewer(h, word) {
    // Write your code here
    const high = { entry: 0 }
    for (let letter of word) {
        let lookup = h[letter.charCodeAt() - 97];
        if (high.entry < lookup) {
            high.entry = lookup;
        }
    }
    return (high.entry * word.length)
}