
    /**
     * @param {number[]} nums
     * @return {number}
     */
function findMinimumInRotatedSortedArray(nums:number[]) {
        let left = 0
        let right = nums.length - 1

        while (left < right) {
            let mid = Math.floor((left + right) / 2);

            // If the middle element is less than the rightmost element,
            // the minimum is in the left part (including mid).
            if (nums[mid] < nums[right]) {
                right = mid;
            } else {
                // Otherwise, the minimum is in the right part (excluding mid).
                left = mid + 1;
            }
        }

        // After the loop, left should point to the minimum element.
        return nums[left];
    }


console.log(findMinimumInRotatedSortedArray([7, 9, 1, 2, 3, 4, 5]))
