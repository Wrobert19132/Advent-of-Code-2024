const fs = require('node:fs');

const data = fs.readFileSync("day2/input.txt", "utf8")

let reports = data.split("\n").map((line) => line.split(" "))


function recursiveCheck(previous, previousDirection, array, problems) {


    if (array.length == 0) {
        return true;
    }

    current = array.pop()

    const difference = previous-current
    const direction = difference / Math.abs(difference)


    if (
        (direction == previousDirection || isNaN(previousDirection)) &&
        (1 <= Math.abs(difference)) && (Math.abs(difference) <= 3) || isNaN(previous)
    ) {
        if (recursiveCheck(current, direction, array.slice(), problems)) { 
            return true;
        }
    } 
    
    
    if (problems<1) {
        return recursiveCheck(previous, previousDirection, array.slice(), problems+1)
    }

    return false

}


reports = reports.map((report) => recursiveCheck(NaN, NaN, report, 0))

console.log(reports.reduce((acc, val) => val ? acc+1 : acc, 0))