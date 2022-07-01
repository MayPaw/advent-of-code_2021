import { boards, numbers, transposedBoards } from './data.js'

let isWon = false
const winData = {
    num: undefined,
    board:undefined,
}


function checkNumber(boardSet, usedNumber) {
    for (let board of boardSet) {
        for(let row of board) {
                    row.forEach((element,i,row) => {
                        element === usedNumber && row.splice(i,1)
                })

                switch(row.length) {
                    case 0 :
                        endGame()
                        winData.num = usedNumber
                        winData.board = board.flatMap(row => row)
                }
            }
    }
}

function endGame() {
    isWon = !isWon
}

function playBingo(numbers, boardSet) {
    let usedNumbers = []
    while(!isWon && numbers.length) {
        usedNumbers.push(numbers.shift())
        checkNumber(boardSet, usedNumbers[usedNumbers.length-1])
    }

    return {...winData, timesChecked: usedNumbers.length}
}

function calcResult(winData) {
    const numRemainingSum = winData.board.reduce((prevValue, currValue) => Number(prevValue) + Number(currValue))
    return numRemainingSum*Number(winData.num)
}


function getResult() {
    const horizontalBingo = playBingo(numbers, boards)
    const verticalBingo = playBingo(numbers, transposedBoards)
    return horizontalBingo.timesChecked > verticalBingo.timesChecked ? calcResult(verticalBingo) : calcResult(horizontalBingo)
}


getResult()
