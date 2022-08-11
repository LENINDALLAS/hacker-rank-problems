
const slidingWindowMaxSumOfNum = (values, num) => {
    if (values.length < num) return null;
    let max = 0;
    let temp = 0;
    for (let i = 0; i < num; i++) {
        max += values[i];
    }
    temp = max;
    for (let j = num; j < values.length; j++) {
        temp = temp - values[j - num] + values[j];
        if (temp > max) {
            max = temp;
        }
    }
    return max;
};

slidingWindowMaxSumOfNum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)