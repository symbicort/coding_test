const data = require('fs').readFileSync('example.txt').toString().trim().toUpperCase()

let maxvalue = 0

console.log(data.indexOf(data[4]))