/* structured data, format: [
    [direction, number]
    ...
]
*/
import {data} from "./data.js"

/* function calculates position based on instructions from data;
returns a number */
function calculatePosition() {
    let horizontal = 0
    let depth = 0
    for (let element of data) {
        if(element[0] === 'forward') {
            horizontal += element[1]
        } else {
            depth += element[1]
        }
    }
    return horizontal * depth
}

console.log(calculatePosition())
