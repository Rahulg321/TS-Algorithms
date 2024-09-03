function containsNearbyDuplicateOptimal(nums: number[], k: number): boolean{
  const seen = new Map<number, number>();
  let n: number = nums.length;
  for(let i: number = 0; i < n; i++){
    if(seen.has(nums[i])){
      let index = seen.get(nums[i]);
      if(Math.abs(i - index!) <= k) return true;
    }
    seen.set(nums[i], i);
  }
  return false;
}