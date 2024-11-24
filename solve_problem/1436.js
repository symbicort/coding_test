let exam = Number(require('fs').readFileSync('example.txt').toString().trim())

let count = 0;
let result = 0;

while(true){
    if(result.toString().indexOf('666') !== -1){
        count += 1;
        if(count == exam){
            break;
        } else {
            result += 1;
        }
    } else {
        result += 1;
    }

}

console.log(result)