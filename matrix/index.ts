
// approach 1 to search in a matrix
function searchMatrix(matrix:number[][], target:number){
    for(let i = 0; i < matrix.length; i ++){
        for(let j = 0; j < matrix[0].length; j ++){
            if(matrix[i][j] === target){
                return true
            }
        }
    }

    return false
}

// approach 2 to search in a matrix which is sorted
function searchSortedMatrix(matrix:number[][], target:number){
    for(let i = 0; i < matrix.length; i ++){
        if(binarySearch(matrix[i], target) === true){
            return true
        }
    }

    return false
}



function binarySearch(nums:number[], target:number){

    let low = 0
    let high = nums.length - 1


    while(low <= high){
        // Calculate the mid index
        let mid = Math.floor((low + high) / 2);
        if(nums[mid] < target){
            low = mid + 1
        }
        if(nums[mid] > target){
            high = mid - 1
        }
        if(nums[mid] === target){
            return true
        }
    }


    return false
}
