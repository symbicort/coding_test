let data = require('fs').readFileSync('example.txt').toString().trim().split('\n').map(Number);

const result = []

for(let i = 1; i <= 30; i++){
    if(!data.includes(i)){
        result.push(i)
    }
}

console.log(result[0] + '\n' + result[1])