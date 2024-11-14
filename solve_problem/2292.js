const number = Number(require('fs').readFileSync('example.txt').toString().trim())

let around = 6;
let cnt = 1;
let count = 1;

while (number > cnt){
    count += 1;
    cnt += around;
    around += 6;
}

console.log(count)