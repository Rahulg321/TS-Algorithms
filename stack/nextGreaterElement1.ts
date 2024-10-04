function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  const greater = new Map();
  let st: number[] = [];

  for (let i = nums2.length - 1; i >= 0; i--) {
    while (st.length != 0 && st[st.length - 1] <= nums2[i]) {
      st.pop();
    }
    if (st.length === 0) {
      greater.set(nums2[i], -1);
    } else {
      greater.set(nums2[i], st[st.length - 1]);
    }
    st.push(nums2[i]);
  }

  let res: number[] = [];
  for (const num of nums1) {
    res.push(greater.get(num));
  }

  return res;
}

const nums1 = [4, 1, 2];
const nums2 = [1, 3, 4, 2];
console.log(nextGreaterElement(nums1, nums2));
