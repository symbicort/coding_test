let data = require('fs').readFileSync('example.txt').toString().trim().split('\n');

const result = [];

data.forEach((data) => {
    result.push(data % 42)
})

const filterArr = result.filter((el, index) => result.indexOf(el) === index);

console.log(filterArr.length)

