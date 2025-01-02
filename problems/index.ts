function mySqrt(x:number):number {
    // find the square root of x without using the built-in Math.sqrt() function
    // we just perform binary search to find the square root of x

    if (x === 0) {  // Handle the edge case
        return 0;
    }

    let low = 1;  // Start low from 1
    let high = x;
    let mid;
    let result = 0;

    while (low <= high) {  // Changed loop condition
        mid = Math.floor((low + high) / 2);  // Corrected mid calculation

        if (mid * mid > x) {
            high = mid - 1;
        } else if (mid * mid < x) {
            low = mid + 1;
            result = mid; // Update result in this case
        } else {
            return mid; // Perfect square root found
        }
    }

    return result; // Return the rounded down result
}
