let data = require('fs').readFileSync('example.txt').toString().trim().split('\n');

let splitData = data[0].split(' ').map(Number)

const arr = []

for(let i = 1; i <= splitData[0]; i++){
    arr.push(i)
}

for(let i = 1; i <= splitData[1]; i++){
    const numData = data[i].split(' ').map(Number);
    const tempArr = [];
    for(let j = numData[0]; j <= numData[1]; j++){
        tempArr.push(arr[j - 1])
    }
    tempArr.reverse();
    arr.splice(numData[0] - 1, numData[1] - numData[0] + 1, ...tempArr)
}

console.log(...arr)
