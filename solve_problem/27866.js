let data = require('fs').readFileSync('example.txt').toString().trim().split('\n');

console.log(data[0][Number(data[1]) - 1])