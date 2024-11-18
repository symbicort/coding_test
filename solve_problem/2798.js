const data = require('fs').readFileSync('example.txt').toString().trim().split('\n')

const [min, max] = data[0].split(' ').map(Number);

const nums = data[0].split(' ').map(Number);

