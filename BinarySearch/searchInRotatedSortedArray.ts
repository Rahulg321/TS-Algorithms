function search(arr: number[], target: number): number{
  let low = 0;
  let high = arr.length - 1;
  while(low <= high){
    let mid = Math.floor(low + (high - low) / 2);
    if(arr[mid] === target) return mid;
    else if(arr[low] <= arr[mid]){
      if(arr[low] <= target && target <= arr[mid]){
        high = mid - 1;
      }
      else{
        low = mid + 1;
      }
    }
    else{
      if(arr[mid] <= target && target <= arr[high]){
        low = mid + 1;
      }
      else{
        high = mid - 1;
      }
    }
  }
  return -1;
}

console.log(search([4, 5, 6, 7, 0, 1, 2], 0));