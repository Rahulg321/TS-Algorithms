function maxProduct(nums: number[]): number{
  let prefix: number = 1;
  let suffix: number = 1;
  let product: number = Number.MIN_SAFE_INTEGER;
  const n: number = nums.length;
  for(let i:number = 0; i < n; i++){
    if(prefix === 0) prefix = 1;
    if(suffix === 0) suffix = 1;
    prefix = prefix * nums[i];
    suffix = suffix * nums[n - i - 1];
    product = Math.max(product, Math.max(prefix, suffix));
  }

  return product;
}

console.log(maxProduct([2, 3, -2, 4]));