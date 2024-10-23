let data = require('fs').readFileSync('example.txt').toString().trim();

const example = 'abcdefghijklmnopqrstuvwxyz'

let result = ''

for(let i = 0; i < example.length; i++){
    result += `${data.indexOf(example[i])} `
}

console.log(result.trim())