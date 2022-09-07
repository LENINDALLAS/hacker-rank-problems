function nestedEvenSum(obj, ext = [], sum = 0) {
    // add whatever parameters you deem necessary - good luck!
    const check = Object.values(obj);
    if (check.length > 0) ext = [...ext, ...check];
    if (ext.length <= 0) return sum;
    const valueType = typeof ext[0];
    if (valueType === 'object') {
        return nestedEvenSum(ext[0], ext.splice(1), sum);
    } else if (valueType === 'number') {
        sum = ext[0] % 2 === 0 ? sum + ext[0] : sum;
        return nestedEvenSum({}, ext.splice(1), sum);
    } else {
        return nestedEvenSum({}, ext.splice(1), sum);
    }
}

var obj1 = {
    outer: 2,
    obj: {
        inner: 2,
        otherObj: {
            superInner: 2,
            notANumber: true,
            alsoNotANumber: 'yup',
        },
    },
};

var obj2 = {
    a: 2,
    b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
    c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
    d: 1,
    e: { e: { e: 2 }, ee: 'car' },
};

console.log(nestedEvenSum(obj1)); // 6
//nestedEvenSum(obj2); // 10