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

var count = new Map()
a.sort()
b.map((i) => count.set(i, (count.get(i) ?? 0) + 1 ))

a = a.map((item) => item * (count.get(item) ?? 0))
console.log(a.reduce((a,b) => a + (b ?? 0) ))
