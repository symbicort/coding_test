let data = require('fs').readFileSync('example.txt').toString().trim().split('\n');

let price = 0;

for(let i = 0; i < Number(data[1]); i++){
    let [a,b] = data[i + 2].split(' ').map(Number)
    price += a * b;
}

if(price === Number(data[0])){
    console.log("Yes")
} else {
    console.log("No")
}