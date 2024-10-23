let data = require('fs').readFileSync('example.txt').toString().trim().split('\n');

for(let i = 0; i < data.length; i++){
    console.log(data[i])
}
