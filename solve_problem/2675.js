let data = require('fs').readFileSync('example.txt').toString().trim().split('\n');

for(let i = 1; i <= Number(data[0]); i++){
    const splitData = data[i].split(' ');
    let result = ''
    for(let j = 0; j < splitData[1].length; j++){
        result += splitData[1][j].repeat(Number(splitData[0]))
    }
    console.log(result)
}