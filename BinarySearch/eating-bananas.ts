
/**
 * You are given an integer array piles where piles[i] is the number of bananas in the ith pile. You are also given an integer h, which represents the number of hours you have to eat all the bananas.

You may decide your bananas-per-hour eating rate of k. Each hour, you may choose a pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, you may finish eating the pile but you can not eat from another pile in the same hour.

Return the minimum integer k such that you can eat all the bananas within h hours.
 * @param piles
 * @param h
 * @returns
 */
    function minEatingSpeed(piles:number[], h:number):number {
        let low = 1
        let high = Math.max(...piles)

        let resultingHours = []

        while(low <= high){
            // Calculate the mid index
            let totalHours = 0
            let mid = Math.floor((low + high) / 2);
            for(let i = 0 ; i < piles.length; i ++){
                let hourTaken = Math.ceil(piles[i]/mid)
                totalHours += hourTaken
            }

            if(totalHours <= h){
                resultingHours.push(mid)
                high = mid -1
            }else{
                low = mid + 1
            }

        }


    return Math.min(...resultingHours)
    }
