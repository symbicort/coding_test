let input = require('fs').readFileSync('example.txt').toString().trim().split('\n');

input[0] = parseInt(input[0])
input[1] = parseInt(input[1])

if(input[0] > 0 && input[1] > 0){
    console.log(1)
} else if(input[0] < 0 && input[1] > 0){
    console.log(2)
} else if(input[0] < 0 && input[1] < 0){
    console.log(3)
} else {
    console.log(4);
}
