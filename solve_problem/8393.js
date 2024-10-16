let data = Number(require('fs').readFileSync('example.txt').toString().trim());

let result = 0;

for(data; data >= 1; data--){
    result += data;
}

console.log(result)