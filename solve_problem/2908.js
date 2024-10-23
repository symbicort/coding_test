let data = require('fs').readFileSync('example.txt').toString().trim().split(' ');

const result = []

for(let i = 0; i < data.length; i++){
    const num = data[i].split('').reverse()
    let number = ''
    num.forEach((data) => {
        number += data
    })
    result.push(Number(number))
}

console.log(result[0] > result[1] ? result[0] : result[1])