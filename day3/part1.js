const fs = require('node:fs');
const data = fs.readFileSync("day3/input.txt", "utf8")
// console.log(data)
matches = data.matchAll(/mul\((\d+),(\d+)\)/g)

matches = matches.map((match) => parseInt(match[1])*parseInt(match[2]))

console.log(matches.reduce((accum, val) => val + accum, 0))
