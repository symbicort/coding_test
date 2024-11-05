let data = require('fs').readFileSync('example.txt').toString().trim().split('\n');

let result = 0;
const totalArr = Array.from({length: 100}, () => Array(100).fill(0));

for(let i = 1; i <= Number(data[0]); i++){
    const square = data[i].split(' ').map(Number)
    for(let j = square[0]; j < square[0] + 10; j++){
        for(let k = square[1]; k < square[1] + 10; k++){
            if(totalArr[j][k] == 1){
                continue;
            }
            totalArr[j][k]++;
            result++;
        }
    }
}

console.log(result)