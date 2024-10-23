let data = require('fs').readFileSync('example.txt').toString().trim().split('\n');

let result = 0;

for(let i = 0; i < Number(data[0]); i++){
    result += Number(data[1][i])
}

console.log(result)