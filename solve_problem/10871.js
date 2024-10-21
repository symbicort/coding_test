let data = require('fs').readFileSync('example.txt').toString().trim().split('\n');

let result = '';

const splitData1 = data[0].split(' ').map(Number)
const splitData2 = data[1].split(' ')

splitData2.forEach((num) => {
    if(Number(num) < splitData1[1]){
        result += `${num} `
    }
})

console.log(result.trim())