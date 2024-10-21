let data = require('fs').readFileSync('example.txt').toString().trim().split('\n');

let splitData = data[0].split(' ').map(Number);

let arr = []

for(let i = 0; i < splitData[0]; i++){
    arr.push(0)
}

for(let i = 1; i < splitData[1] + 1; i++){
    const numarr = data[i].split(' ').map(Number);
    for(let j = numarr[0]; j <= numarr[1]; j++){
        arr.splice(j - 1, 1, numarr[2]) 
    }
}

console.log(...arr)