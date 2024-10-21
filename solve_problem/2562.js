let data = require('fs').readFileSync('example.txt').toString().trim().split('\n').map(Number);

const maxNumber = Math.max(...data)
const maxIndex = data.indexOf(maxNumber) + 1

console.log(maxNumber + '\n' + maxIndex)