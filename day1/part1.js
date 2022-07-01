//import structured data
 import {data} from "./data.js"

/* function counts how many times in data array 
the value of (i+1)th element increased, compared to the value 
of the ith element; returns a number */
function countIncreased() {
    let increasedCount = 0
    for(let i = 0; i < data.length; i++) {
        if (data[i] < data[i+1]) {
            increasedCount++
        }
    }
    return increasedCount
}

console.log(countIncreased())

