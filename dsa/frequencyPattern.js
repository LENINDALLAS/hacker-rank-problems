const validAnagram = (str1, str2) => {
    if (str1.length !== str2.length) return false;
    const counted = {
        countStr1: {},
        countStr2: {},
    };

    for (const key of str1) {
        counted.countStr1[key] = (counted.countStr1[key] || 0) + 1;
    }
    for (const key of str2) {
        counted.countStr2[key] = (counted.countStr2[key] || 0) + 1;
    }
    for (const key in counted.countStr1) {
        if (
            !counted.countStr2.hasOwnProperty(key) ||
            counted.countStr1[key] !== counted.countStr2[key]
        )
            return false;
    }
    return true;
};

// validAnagram('aaz', 'zza'); // false
// validAnagram('anagram', 'nagaram'); // true
// validAnagram('rat', 'car'); // false) // false
// validAnagram('awesome', 'awesom'); // false
// validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana'); // false
// validAnagram('qwerty', 'qeywrt'); // true
// validAnagram('texttwisttime', 'timetwisttext'); // true

// optimized solution

const validAnagram = (str1, str2) => {
    if (str1.length !== str2.length) return false;
    const counted = {
        countStr1: {}
    };

    for (const key of str1) {
        counted.countStr1[key] = (counted.countStr1[key] || 0) + 1;
    }
    for (const key of str2) {
        if (!counted.countStr1.hasOwnProperty(key)) {
            return false;
        } else {
            counted.countStr1[key] = counted.countStr1[key]-1;
        }
    }
    return true;
};