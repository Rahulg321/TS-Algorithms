function summaryRanges(nums: number[]): string[] {
  let ranges: string[] = [];
  let start = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i + 1 < nums.length && nums[i + 1] === nums[i] + 1) {
      // move the i pointer forward in this case
      continue;
    } else {
      // there are two possibilities here, either we have found a range in that case we will push to ranges, or there is no range, and we have a single case,

      if (start === i) {
        ranges.push(`${nums[i]}`);
      } else {
        ranges.push(`${nums[start]}->${nums[i]}`);
      }

      start = i + 1;
    }
  }

  return ranges;
}

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let p1 = m - 1; // Pointer for nums1 (starting from the last element of the initial portion)
  let p2 = n - 1; // Pointer for nums2
  let p = m + n - 1; // Pointer for the merged array (starting from the end of nums1)

  while (p1 >= 0 && p2 >= 0) {
    if (nums1[p1] > nums2[p2]) {
      nums1[p] = nums1[p1];
      p1--;
    } else {
      nums1[p] = nums2[p2];
      p2--;
    }
    p--;
  }

  // If there are remaining elements in nums2, copy them to the beginning of nums1
  while (p2 >= 0) {
    nums1[p] = nums2[p2];
    p2--;
    p--;
  }
}


function pascalsTriangle(numRows: number): number[][] {

    let result = []

    for(let i = 0; i < numRows; i++ ){
        console.log("i",i)
        let row = []
        for(let j = 0; j <= i; j++ ){
        console.log("j",j)
            if(j === 0 || j === i){
                row[j] = 1
            }else{
                row[j] = result[i-1][j] + result[i-1][j-1]
            }
        }

        result.push(row)

    }

    return result

};
