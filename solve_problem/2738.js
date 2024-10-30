let data = require('fs').readFileSync('example.txt').toString().trim().split('\n');

const answer = [];

const size = data[0].split(' ').map(Number)

for(let i = 1; i <= size[0]; i++){
    const pushData = [];
    const splitData1 = data[i].split(' ').map(Number)
    const splitData2 = data[i + size[0]].split(' ').map(Number)
    for(let j = 0; j < size[1]; j++){
        pushData.push(splitData1[j] + splitData2[j])
    }
    answer.push(pushData)
}

for(let i = 0; i < answer.length; i++){
    let returnData = ''
    for(let j = 0; j < answer[i].length; j++){
        returnData += `${answer[i][j]} `
    }
    console.log(returnData.trim())
}