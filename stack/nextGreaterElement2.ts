function nextGreaterElement2(nums1: number[]): number[] {
  let n = nums1.length;
  let ans: number[] = new Array(n).fill(-1);
  let st: number[] = [];

  for(let i = 2*n-1; i>=0; i--){
    let index = i%n;
    while(st.length && nums1[st[st.length-1]] <= nums1[index]){
      st.pop();
    }
    if(i < n){
      ans[index] = st.length === 0 ? -1 : nums1[st[st.length -1]];  
    }

    st.push(index);
  }
  return ans;
}

const n = [4, 1, 2];
console.log(nextGreaterElement2(n));
// console.log(new Array(3).fill(-1));
