const data = require('fs').readFileSync('example.txt').toString().trim()

let reverse = ''

for(let i = 1; i <= data.length; i++){
    reverse += data[data.length - i]
}

if(data === reverse) {
    console.log(1)
} else {
    console.log(0)
}