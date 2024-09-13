function maxElement(weights: number[], n: number): number{
  let maxi = Number.MIN_SAFE_INTEGER;
  for(let i = 0; i < n; i++){
    maxi = Math.max(weights[i], maxi);
  }
  return maxi;
}

function leastDays(weights: number[], capacity: number, n: number): number{
  let days: number = 1;
  let loads: number = 0;
  for(let i = 0; i < n; i++){
    if(weights[i] + loads > capacity){
      days++;
      loads = weights[i];
    }
    else{
      loads += weights[i];
    }
  }
  return days;
}





function shipWithinDays(weights: number[], days: number): number{
  let n = weights.length;
  let low: number = maxElement(weights, n);
  let high: number = weights.reduce((acc, curr) => acc + curr, 0);
  let ans = -1;

  while(low <= high){
    let mid: number = low + (high - low) / 2;
    if(leastDays(weights, mid, n) <= days){
      high = mid - 1;
      ans = mid;
    }
    else{
      low = mid + 1;
    }
  }

  return ans;
}