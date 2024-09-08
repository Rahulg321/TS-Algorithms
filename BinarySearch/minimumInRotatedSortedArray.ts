function MinimumInRotatedSortedArray(arr: number[]): number{
  let low = 0;
  let high = arr.length - 1;
  let ans = Number.MAX_VALUE;
  while(low <= high){
    let mid = Math.floor((low + high) / 2);
    if(arr[low] <= arr[mid]){
      ans = Math.min(ans, arr[low]);
      low = mid + 1;
    }
    else{
      ans = Math.min(ans, arr[mid]);
      high = mid - 1;
    }
  }
  return ans;
}

console.log(MinimumInRotatedSortedArray([4, 5, 6, 1, 2, 3]));