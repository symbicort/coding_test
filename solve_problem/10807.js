let data = require('fs').readFileSync('example.txt').toString().trim().split('\n');

let result = 0;

const splitData = data[1].split(' ')

splitData.forEach((num) => {
    if(Number(num) === Number(data[2])){
        result += 1;
    }
})

console.log(result)