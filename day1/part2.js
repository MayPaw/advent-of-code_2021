// import structured data
import {data} from "./data.js"

/* function counts how many times in data array sum of the three elements interval 
is bigger than sum of the next three element interval; the interval 
moves 1 index number at time; returns number */ 
function countIncreased() {
    let increasedCount = 0
    for(let i = 3; i < data.length; i++) {
        const window1 = data[i-3]+data[i-2]+data[i-1]
        const window2 = data[i-2]+data[i-1]+data[i]
        if (window1 < window2) {
            increasedCount++
        }
    }
    return increasedCount
}

console.log(countIncreased())