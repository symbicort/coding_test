let data = require('fs').readFileSync('example.txt').toString().trim().split('\n');

for(let i = 1; i <= Number(data[0]); i++){
    console.log(data[i][0] + data[i][data[i].length - 1])
}