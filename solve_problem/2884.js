let [A,B] = require('fs').readFileSync('example.txt').toString().trim().split(' ').map(Number);

if(B >= 45){
    console.log(A, B-45)
} else {
    B = 60 + B - 45;
    if(A === 0){
        A = 23;
    } else {
        A -= 1;
    }
   
    console.log(A, B)
}