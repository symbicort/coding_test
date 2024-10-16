let data = Number(require('fs').readFileSync('example.txt').toString().trim());

for(let i = 1; i <= data; i++){
    let str = ''
    for(let j = 0; j < data - i; j++){
        str += ' '
    }
    for(let k = 0; k < i; k++){
        str += '*'
    }
    console.log(str)
}

