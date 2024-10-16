let data = Number(require('fs').readFileSync('example.txt').toString().trim());

for(let i = 1; i < 10; i++){
    console.log(`${data} * ${i} = ${data * i}`)
}