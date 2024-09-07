function floor(arr: number[], low: number, high: number, target: number): number{
  let ans = -1;
  while(low <= high){
    let mid = Math.floor(low + (high - low) / 2);
    if(arr[mid] <= target){
      ans = arr[mid];
      low = mid + 1;
    }
    else{
      high = mid - 1;
    }
  }
  return ans;
}

function ciel(arr: number[], low: number, high: number, target: number): number{
  let ans = -1;
  while(low <= high){
    let mid = Math.floor(low + (high - low) / 2);
    if(arr[mid] >= target){
      ans = arr[mid];
      high = mid - 1;
    }
    else{
      low = mid + 1;
    }
  }
  return ans;
}

function getFloorAndCeil(arr: number[], target: number): number[] {
  let low = 0;
  let high = arr.length - 1;
  arr.sort((a, b) => a - b);
  let temp: number[] = [];
  temp.push(floor(arr, low, high, target));
  temp.push(ciel(arr, low, high, target));
  return temp;
}

console.log(getFloorAndCeil([1, 2, 8, 10, 10, 12, 19], 5));

