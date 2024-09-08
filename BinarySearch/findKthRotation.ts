function FindKthRotation(arr: number[]): number{
  let low = 0;
  let high = arr.length - 1;
  let ans = Number.MAX_VALUE;
  let index = -1;
  while(low <= high){
    let mid = Math.floor((low + high) / 2);
    if(arr[low] <= arr[high]){
      if(arr[low] < ans){
        index = low;
        ans = arr[low];
      }
      break;
    }

    if(arr[low] <= arr[mid]){
      if(arr[low] < ans){
        index = low;
        ans = arr[low];
      }
      low = mid + 1;
    }
    else if(arr[mid] <= arr[high]){
      if(arr[mid] < ans){
        index = mid;
        ans = arr[mid];
      }
      high = mid - 1;
    }
  }
  return index;
}

console.log(FindKthRotation([4, 5, 6, 1, 2, 3]));

