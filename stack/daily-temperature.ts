 /*


 You are given an array of integers temperatures where temperatures[i] represents the daily temperatures on the ith day.

Return an array result where result[i] is the number of days after the ith day before a warmer temperature appears on a future day. If there is no day in the future where a warmer temperature will appear for the ith day, set result[i] to 0 instead
     * @param {number[]} temperatures
     * @return {number[]}
     */
 function dailyTemperatures(temperatures:number[]) {
    let result = new Array(temperatures.length).fill(0);
    let stack =[];

    for (let i = 0; i < temperatures.length; i++) {
        const t = temperatures[i];
        while (stack.length > 0 && t > stack[stack.length - 1][0]) {
            let [stackT, stackInd] = stack.pop()!; // Non-null assertion
            result[stackInd] = (i - stackInd);
        }

        stack.push([t, i]);
    }

    return result;

}
