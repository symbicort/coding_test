let data = require('fs').readFileSync('example.txt').toString().trim().split('\n');

let exam = data[1].split(' ').map(Number)

const maxExam = Math.max(...exam)

let result = 0;

for(let i = 0; i < Number(data[0]); i++){
    result += (exam[i]/maxExam) * 100
}

console.log(result / Number(data[0]))