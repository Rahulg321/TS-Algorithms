function longestSubstringWithoutRepeatingChars(s:string) {
    let left = 0;
    let right = 0;
    let maxLength = 0;
    const charSet = new Set();

    while (right < s.length) {
      if (!charSet.has(s[right])) {
        charSet.add(s[right]);
        console.log("charSet", charSet)
        maxLength = Math.max(maxLength, right - left + 1);
        right++;
    } else {
        console.log("charSet", charSet)
        charSet.delete(s[left]);
        console.log("charSet", charSet)
        left++;
      }
    }

    return maxLength;
  }
console.log(longestSubstringWithoutRepeatingChars("abcabca"))
