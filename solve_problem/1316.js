let input = require('fs').readFileSync('example.txt').toString().trim().split('\n');

let result = 0;

for(let i = 1; i <= Number(input[0]); i++){
    let bool = true;
    const letter = [];
    for (let j = 0; j < input[i].length; j++) {
        if (letter.indexOf(input[i][j]) === -1) {
          letter.push(input[i][j]);
        } else {
          if (letter.indexOf(input[i][j]) !== letter.length - 1) {
            console.log(input[i])
            bool = false;
            break;
          }
        }
      }
    
      if (bool) {
        result += 1;
      }
    console.log("letter 값", letter)
}

console.log(result)