const [min,max] = require('fs').readFileSync('example.txt').toString().trim().split('\n').map(Number)

const resultarr = []
let result = 0

for(let i = min; i <= max; i++){
    const temp = []

    if(i == 1){
        continue
    }
    for(let j = 2; j < i; j++){
        if(i % j == 0){
            temp.push(i)
        }
    }
    
    if(temp.length == 0){
        resultarr.push(i)
    }
}

if(resultarr.length === 0){
    console.log(-1)
} else {
    resultarr.forEach((data) => {
        result += data
    })

    console.log(result)
    console.log(Math.min(...resultarr))
}

