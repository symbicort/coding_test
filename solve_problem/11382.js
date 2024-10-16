let input = require('fs').readFileSync('example.txt').toString().trim().split(' ');

let result = 0;

for(num of input){
    result += Number(num)
}

console.log(result)
