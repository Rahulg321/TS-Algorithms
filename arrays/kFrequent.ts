
/**
 * Given an integer array nums and an integer k, return the k most frequent elements within the array.

The test cases are generated such that the answer is always unique.

You may return the output in any order.
 * @param nums
 * @param k
 * @returns
 */

function topKFrequent(nums:number[], k:number) {
        let frequentMap = new Map()
        for (const num of nums) {
        // Efficiently increment the count
            frequentMap.set(num, (frequentMap.get(num) || 0) + 1);
        }
        // Convert to array of [word, count] and sort by count (descending)
         const sortedFrequencies = Array.from(frequentMap.entries()).sort(([, countA], [, countB]) => countB - countA);

        // Get the top k frequent words
        const topK = sortedFrequencies.slice(0, k);

        // If you need just the words (not the counts):
        const topKWords = topK.map(([word]) => word);

        return topKWords;
    }
