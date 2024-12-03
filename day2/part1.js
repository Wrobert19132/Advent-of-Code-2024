const fs = require('node:fs');

const data = fs.readFileSync("day2/input.txt", "utf8")

let reports = data.split("\n").map((line) => line.split(" "))

reports = reports.map(
    (report)=>report.reduce(
        ([direction, previous], value, i, array) => {
            if (isNaN(previous)) {
                return [direction, value]
            } else {

                const difference = previous-value
                const currentDirection = difference / Math.abs(difference)

                if ((1 <= Math.abs(difference)) && (Math.abs(difference) <= 3) && (currentDirection == direction || direction==0)) {
                    if (array.length-1 == i) {
                        return 1;
                    } else {
                        return [currentDirection, value]
                    }
                }
                
                array.splice(1)
                return 0; 
            }

        },
        initialValue=[0, NaN]
    )
)

console.log(reports.reduce((acc, prev) => prev + acc), 0)