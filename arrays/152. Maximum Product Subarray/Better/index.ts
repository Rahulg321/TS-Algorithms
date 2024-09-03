function maxProduct1(nums: number[]): number{
  const n: number = nums.length;
  let result: number = Number.MIN_SAFE_INTEGER;
  for(let i: number = 0; i < n; i++){
    let product: number = 1;
    for(let j: number = i; j < n; j++){
      product = product * nums[j];
      result = Math.max(result, product);
    }
  }
  return result;
}