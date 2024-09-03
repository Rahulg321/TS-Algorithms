function containsNearbyDuplicate(nums: number[], k: number): boolean{
  let n: number = nums.length;
  for(let i: number = 0; i < n; i++){
    for(let j: number = i + 1; j < n; j++){
      if(nums[i] == nums[j] && Math.abs(j - i) <= k) return true;
    }
  }
  return false;
}