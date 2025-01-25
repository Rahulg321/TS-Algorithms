
 /**
  * naive way to solve this problem is to use two loops to calculate the product of all the elements except the current element
  * @param nums
  * @returns
  */
function productExceptSelf(nums:number[]) {
        let output = []

        for(let i = 0; i < nums.length; i ++ ){
            let sum = 1

            for(let j = 0; j < nums.length; j ++ ){
               if(i !== j){
                    sum *= nums[j]
               }
            }

            output.push(sum)

        }

        return output

}



/**
 * optimal way to solve this problem is to use two arrays to store the product of all the elements to the left and right of the current element
 * @param nums
 * @returns
 */

/**
 * important question, refer back to it later
 *
 */
function optimalProductExceptSelf(nums:number[]){
    let n = nums.length
    let left = new Array(n)
    let right = new Array(n)
    let output = new Array(n)

    left[0] = 1
    right[n - 1] = 1

    for(let i = 1; i < n; i ++){
        left[i] = left[i - 1] * nums[i - 1]
    }

    for(let i = n - 2; i >= 0; i --){
        right[i] = right[i + 1] * nums[i + 1]
    }

    for(let i = 0; i < n; i ++){
        output[i] = left[i] * right[i]
    }

    return output
}
