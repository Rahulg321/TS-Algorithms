function containsDuplicate(nums: number[]): boolean{
  let n: number = nums.length;
  let ans: boolean = false;

  for(let i: number = 0; i < n; i++){
    let count: number = 0;
    for(let j: number = i + 1; j < n; j++){
      if(nums[i] == nums[j]) count++;
    }
    if(count > 0){
      ans = true;
      break;
    }
  }
  return ans;
}