  /**
   * You are given a string s consisting of only uppercase english characters and an integer k. You can choose up to k characters of the string and replace them with any other uppercase English character.

After performing at most k replacements, return the length of the longest substring which contains only one distinct character.
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
  function characterReplacement(s:string, k:number) {
    let left = 0
    let right = 0
    let result = 0

    while(right < s.length){
        let substring = s.slice(left, right+1)
        let mostFrequentLength = mostFrequentCharacters(substring)
        let availableReplacements = substring.length - mostFrequentLength
        if(availableReplacements <= k){
            result = Math.max(result, substring.length)
            right++
        }else{
            left++
        }

    }

    return result;

}

function mostFrequentCharacters(s:string){
    let frequentChars = new Map()
    let maxFrequency = 0

    for(let i = 0; i < s.length; i ++){
        if(frequentChars.has(s[i])){
            frequentChars.set(s[i], frequentChars.get(s[i]) + 1)
        }else{
            frequentChars.set(s[i], 1);
        }
    }
     // Find the maximum frequency
    for (let [char, frequency] of frequentChars) {
        if (frequency > maxFrequency) {
            maxFrequency = frequency;
        }
    }

    return maxFrequency

}
