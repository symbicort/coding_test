let data = Number(require('fs').readFileSync('example.txt').toString().trim());

let str = ''
const repeat = data / 4

for(let i = 0; i < repeat; i++){
    str += 'long '
}

console.log(str + 'int')