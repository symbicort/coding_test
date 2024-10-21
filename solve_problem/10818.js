let data = require('fs').readFileSync('example.txt').toString().trim().split('\n');

const splitData = data[1].split(' ').map(Number)

console.log(Math.min(...splitData), Math.max(...splitData))