let data = require('fs').readFileSync('example.txt').toString().trim().split('\n');

let splitData = data[0].split(' ').map(Number);

let arr = []

for(let i = 1; i < splitData[0] + 1; i++){
    arr.push(i)
}

for(let i = 1; i < splitData[1] + 1; i++){
    const numarr = data[i].split(' ').map(Number);
    const result1 = arr[numarr[0] - 1]
    const result2 = arr[numarr[1] - 1]
    arr[numarr[0] - 1] = result2
    arr[numarr[1] - 1] = result1
}

console.log(...arr)