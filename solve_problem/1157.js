const data = require('fs').readFileSync('example.txt').toString().trim().toUpperCase().split('')

let maxLength = 0;
let maxValue = '';

const filterData = data.filter((element, index) => {
    return data.indexOf(element) === index
})

for(let i = 0; i < filterData.length; i++){
    const roopLength = data.filter(element => filterData[i] === element).length;
    if(roopLength === maxLength){
        maxValue = '?'
    } else if(roopLength > maxLength){
        maxValue = filterData[i]
        maxLength = roopLength
    } else {
        continue;
    }
}

console.log(maxValue)

