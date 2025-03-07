function twoSum(numbers: number[], target: number) {
  let left = 0;
  let right = numbers.length - 1;
  let sum = 0;

  while (left < right) {
    sum = numbers[left] + numbers[right];

    if (sum > target) {
      console.log("right is ", right);
      right -= 1;
    }

    if (sum < target) {
      console.log("left is ", left);
      left += 1;
    } else if (sum === target) {
      // the sum is equal to target
      break;
    }
  }

  return [left + 1, right + 1];
}

function threeSum(nums: number[]) {
  nums.sort((a, b) => a - b);
  let resultSet: number[][] = [];

  for (let i = 0; i < nums.length; i++) {
    // we cannot reuse the same value over and over again
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let left = i + 1;
    let right = nums.length - 1;
    let threeSum = 0;

    while (left < right) {
      threeSum = nums[i] + nums[left] + nums[right];

      if (threeSum > 0) {
        right -= 1;
      }

      if (threeSum < 0) {
        left += 1;
      }

      if (threeSum === 0) {
        resultSet.push([nums[i], nums[left], nums[right]]);
        left += 1;
        while (nums[left] === nums[left - 1] && left < right) {
          left += 1;
        }
      }
    }
  }

  return resultSet;
}




/**
 * You are given an integer array heights where heights[i] represents the height of the ith bar.
You may choose any two bars to form a container. Return the maximum amount of water a container can store.
 * @param heights
 * @returns number
 */
function maxArea(heights:number[]):number {
        let left = 0
        let right = heights.length - 1

        let maxArea = 0

        while(left < right){

            let height = Math.min(heights[left],heights[right])
            // absolute positive value
            let width = Math.abs(right - left);

            let area = height * width

            maxArea = Math.max(area, maxArea)

            if(heights[left] < heights[right]){
                left +=1
            }else{
                right -=1
            }

        }

        return maxArea

    }
