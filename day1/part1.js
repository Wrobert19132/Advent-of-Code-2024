const fs = require('node:fs');

const data = fs.readFileSync("day1/input.txt", "utf8")

let a, b 
[a, b] = [[], []]

data.split("\n").map((line) => {
  if (line != "") {
    let itemA, itemB
    [itemA, itemB] = line.split("   ")
    a.push(itemA)
    b.push(itemB)
  }
})


a.sort()
b.sort()

a = a.map((item, index) => Math.abs(item - b[index]) )
console.log(a.reduce((a,b) => a + (b ?? 0) ))
