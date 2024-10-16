let data = require('fs').readFileSync('example.txt').toString().trim().split('\n');

for(let i = 0; i < Number(data[0]); i++){
    let [a,b] = data[i + 1].split(' ').map(Number);
    console.log(a + b)
}