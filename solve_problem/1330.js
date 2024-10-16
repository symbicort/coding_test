let input = require('fs').readFileSync('example.txt').toString().trim().split(' ');

if(Number(input[0]) > Number(input[1])){
    console.log('>')
} else if(Number(input[0]) === Number(input[1])){
    console.log('==')
} else {
    console.log('<')
}
