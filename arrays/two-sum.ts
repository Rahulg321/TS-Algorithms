/**
 * Given an array of integers nums and an integer target, return the indices i and j such that nums[i] + nums[j] == target and i != j.

You may assume that every input has exactly one pair of indices i and j that satisfy the condition.

Return the answer with the smaller index first.
 * @param nums
 * @param target
 * @returns
 */


function twoSum(nums:number[], target:number){
    let hashMap = new Map<number, number>()

     for(let i = 0; i < nums.length; i ++){
            let difference = target - nums[i];

            if(hashMap.has(difference)){
                console.log("found the difference")
               return [hashMap.get(difference), i]
            }

            console.log("setting a value inside hashmap")
            hashMap.set(nums[i],i)

        }
        return []; // Return empty array if no solution is found

}
