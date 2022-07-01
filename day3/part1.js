// import structured data 
import {data} from "./data.js"

/* function loops through each character of each string
   and counts occurance of zeros and ones, which then
   determines gammaRate and epsilonRate; returns a number
*/
function getPowerConsumption() {
    let gammaRate = ""
    let epsilonRate = ""
    
    for (let i=0; i < 12; i++) {
        let zeroCount = 0
        let oneCount = 0
        
        for (let code of data) {
            if(code[i] === "0") {
                zeroCount ++
            } else {  
                oneCount ++
            }

        }

        zeroCount > oneCount ? gammaRate += "0" : gammaRate += "1"
        zeroCount > oneCount ? epsilonRate += "1" : epsilonRate += "0"
    }

    return parseInt(gammaRate, 2) * parseInt(epsilonRate, 2)
}

console.log(getPowerConsumption())
