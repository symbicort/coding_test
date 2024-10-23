const data = require('fs').readFileSync('example.txt').toString().trim().map(Number);

const chess = [1,1,2,2,2,8]

let result = ''

for(let i = 0; i < data.length; i++){
    result += `${chess[i] - data[i]} `
}

console.log(result.trim())