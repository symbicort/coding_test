let data = require('fs').readFileSync('example.txt').toString().trim().split(' '). map(Number);

if(data[0] == data[1] && data[1] == data[2]){
    console.log(10000 + (data[0] * 1000))
} else {
    const filter = data.filter((val, index) => data.indexOf(val) !== index)
    if(filter.length != 0){
        console.log(1000 + (filter[0] * 100))
    } else {
        const maxval = Math.max(...data)
        console.log(maxval * 100)
    }
}