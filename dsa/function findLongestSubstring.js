function findLongestSubstring(arr) {
  // add whatever parameters you deem necessary - good luck!
  if (!arr.length) return 0;
  let start = 0;
  let end = 0;
  let store = {};
  let max = 0;
  while (end < arr.length) {
    if (store[arr[end]]) {
      delete store[arr[start]];
      if (end - start > max) max = end - start;
      start++;
    } else {
      store[arr[end]] = arr[end];
      end++;
      if (end - start > max) max = end - start;
    }
  }
  return max;
}
