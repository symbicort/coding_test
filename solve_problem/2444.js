const data = require('fs').readFileSync('example.txt').toString().trim()

const temp = []

for(let i = 1; i <= data * 2 - 1; i++){
    if(i <= data){
        console.log(' '.repeat(data - i) + '*'.repeat(i * 2 - 1))
        temp.push(' '.repeat(data - i) + '*'.repeat(i * 2 - 1))
    } else {
        console.log(temp[data * 2 - i - 1])
    }
}