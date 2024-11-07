const example = require('fs').readFileSync('example.txt').toString().trim().split(' ')
const alphabet = Array.from({length: 26}, (_, index) => String.fromCharCode(index + 65))
let result = 0;

for(let i = 0; i < example[0].length; i++){
    result += Math.pow(Number(example[1]), i) * (alphabet.indexOf(example[0][i]) + 10)
}

console.log(result) 

// const fs = require("fs");
// let [num, divider] = fs.readFileSync("example.txt").toString().trim().split(" ");

// let ans = parseInt(num, Number(divider));

// console.log(ans);