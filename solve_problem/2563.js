let data = require('fs').readFileSync('example.txt').toString().trim().split('\n');

const dupArr = [];
let squareSize = Number(data[0]) * 100

for(let i = 1; i < Number(data[0]); i++){
    for(let j = i + 1; j <= Number(data[0]); j++ ){
        const arr1 = data[i].split(' ').map(Number)
        const arr2 = data[j].split(' ').map(Number)
        if(arr1[0] - arr2[0] < 10 && arr1[0] - arr2[0] > -10){
            dupArr.push([(10 + Math.min(arr1[0], arr2[0])) - Math.max(arr1[0], arr2[0]), 
            Math.abs(arr1[1] - arr2[1])])
        }
    }
}

for(let i = 0; i < dupArr.length; i++){
    squareSize -= dupArr[i][0] * (10 - dupArr[i][1])
    console.log(dupArr[i][0] * (10 - dupArr[i][1]))
}

console.log(squareSize)