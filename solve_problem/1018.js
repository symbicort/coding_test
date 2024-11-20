const example = require('fs').readFileSync('example.txt').toString().trim().split('\n');

const [line, length] = example[0].split(' ').map(Number)

let first = ''
let result = 0;

for(let i = 1; i <= line; i++){
    const data = example[i].split('').slice(0, 8)
    console.log(data)
}


// BBBWBWBW 1
// BBBBWBWB 2
// BBBWBWBW 1
// BBBBWBWB 2
// BBBWBWBW 1
// BBBBWBWB 2
// BBBWBWBW 1
// BBBBWBWB 2
// WWWWWBWB 2
// WWWWWBWB

