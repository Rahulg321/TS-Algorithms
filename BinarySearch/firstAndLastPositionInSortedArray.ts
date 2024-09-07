function FirstOccurence(arr: number[], target: number): number{
  let low = 0;
  let high = arr.length - 1;
  let first = -1;
  while(low <= high){
    let mid = Math.floor(low + (high - low) / 2);
    if(arr[mid] === target){
      first = mid;
      high = mid - 1;
    }
    else if(arr[mid] > target) high = mid - 1;
    else low = mid + 1;
  }
  return first;
}

function LastOccurence(arr: number[], target: number): number{
  let low = 0;
  let high = arr.length - 1;
  let last = -1;
  while(low <= high){
    let mid = Math.floor(low + (high - low) / 2);
    if(arr[mid] === target){
      last = mid;
      low = mid + 1;
    }
    else if(arr[mid] < target) low = mid + 1;
    else high = mid - 1;
  }
  return last;
}

function firstAndLastPosition(arr: number[], target: number): number[]{
  let first = FirstOccurence(arr, target);
  if(first === -1) return [-1, -1];
  let last = LastOccurence(arr, target);
  return [first, last];
}

console.log(firstAndLastPosition([1, 2, 3, 3, 3, 3, 4, 5], 3));
