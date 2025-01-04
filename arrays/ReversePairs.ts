function reversePairs(nums: number[]): number {
  let n: number = nums.length;
  return mergeSort(nums, 0, n - 1);
}

function mergeSort(arr: number[], low: number, high: number): number {
  let count: number = 0;
  if (low >= high) return count;

  let mid = Math.floor((low + high) / 2);
  count += mergeSort(arr, low, mid);
  count += mergeSort(arr, mid + 1, high);
  count += countPairs(arr, low, mid, high);
  merge(arr, low, mid, high);
  return count;
}

function countPairs(
  arr: number[],
  low: number,
  mid: number,
  high: number,
): number {
  let right: number = mid + 1;
  let count: number = 0;
  for (let i = low; i <= mid; i++) {
    while (right <= high && arr[i] > 2 * arr[right]) {
      right++;
    }
    count += right - (mid + 1);
  }
  return count;
}

function merge(arr: number[], low: number, mid: number, high: number): void {
  let right: number = mid + 1;
  let left: number = low;
  let temp: number[] = [];

  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) {
      temp.push(arr[left]);
      left++;
    } else {
      temp.push(arr[right]);
      right++;
    }
  }


  while (left <= mid) {
    temp.push(arr[left]);
    left++;
  }


  while (right <= high) {
    temp.push(arr[right]);
    right++;
  }
  for (let i = low; i <= high; i++) {
    arr[i] = temp[i - low];
  }
}

const nums: number[] = [1,3,2,3,1];
console.log(reversePairs(nums));
