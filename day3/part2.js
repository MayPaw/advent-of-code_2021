// import structured data 
import {data} from "./data.js"

/* function determines more or less common number in each character
of each string in data array and returns new array with , depended on calculated rating */
function getDominatingChar(dataArray, index, calcRating) {
    let zerosOutputArray = []
    let onesOutputArray = []

    for (let element of dataArray){
        if(element[index]==="0") {
            zerosOutputArray.push(element)
        } else {
            onesOutputArray.push(element)

        }
    }
    
    if( calcRating === "oxygen") {
        //keeps more common, if equal keeps 1
        return zerosOutputArray.length > onesOutputArray.length ? onesOutputArray : zerosOutputArray
    } else if (calcRating === "co2") {
        // keeps less common, if equal keeps 0
        return zerosOutputArray.length > onesOutputArray.length  ? zerosOutputArray : onesOutputArray
    }
}

function dropElements(spliceArray, dataArray){
    spliceArray.forEach((element) => {
        dataArray.splice(dataArray.indexOf(element),1)
    })
}



function getRating(calcRating) {
    const dataCopy = [...data]
    for(let i=0; i<12; i++){
        if(dataCopy.length === 1) {
            break
        } else { 
            dropElements(getDominatingChar(dataCopy,i,calcRating),dataCopy)
        }
    }
    return dataCopy[0]
}


function getLifeSupportRating() {
    const oxygenRating = parseInt(getRating("oxygen"),2)
    const co2Rating = parseInt(getRating("co2"),2)
    return oxygenRating*co2Rating
}

console.log(getLifeSupportRating())


