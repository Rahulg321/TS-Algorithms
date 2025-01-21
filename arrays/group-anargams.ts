
/**
 * Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.

An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.
 * @param strs
 * @returns
 */
function groupAnagrams(strs: string[]): string[][] {
        let wordAnargams = new Map();

        for(let st of strs){
            let sortedSt = sortedString(st)
            if(wordAnargams.has(sortedSt)){
                wordAnargams.get(sortedSt).push(st)
            }else{
                wordAnargams.set(sortedSt, [st])
            }

        }
        // Return the grouped anagrams
        return Array.from(wordAnargams.values());
    }


function sortedString(str:string){
        return str.split("").sort().join("");
    }
