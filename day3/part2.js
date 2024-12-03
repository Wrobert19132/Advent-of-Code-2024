const fs = require('node:fs');
const data = fs.readFileSync("day3/input.txt", "utf8")
// console.log(data)
var matches = data.matchAll(/(do\(\))|(don't\(\))|((mul)\((\d*),(\d+)\)|())/g)

var final = 0;
var doParse = true
for (var match of matches) {
    if (match[4] == "mul" && doParse) {
        console.log(match[5], match[6])
        final += parseInt(match[5])*parseInt(match[6])
    } else if (match[1] == "do()") {
        doParse = true
    } else if (match[2] == "don't()") {
        doParse = false
    }
}

console.log(final)
