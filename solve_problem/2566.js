let data = require('fs').readFileSync('example.txt').toString().trim().split('\n');

let maxValue = 0
let height = 0;
let location = 0;

for(let i = 1; i <= data.length; i++){
    const numbers = data[i - 1].split(' ').map(Number)
    if(maxValue <= Math.max(...numbers)){
        maxValue = Math.max(...numbers)
        height = i
        location = numbers.indexOf(Math.max(...numbers)) + 1
    }
}

console.log(maxValue)
console.log(`${height} ${location}`)