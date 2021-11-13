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
    const converted = [];
    const high = { entry: 0 }
    for (let letter of word) {
        let code = letter.charCodeAt() - 97;
        let lookup = h[code];
        if (high.entry < lookup) {
            high.entry = lookup;
        }
    }
    return (high.entry * word.length)
}