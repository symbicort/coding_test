const data = require('fs').readFileSync('example.txt').toString().trim().split(' ');

if(data[0] == ''){
    console.log(0)
} else{
    console.log(data.length)
}