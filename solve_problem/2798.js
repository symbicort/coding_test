const data = require('fs').readFileSync('example.txt').toString().trim().split('\n')

const [min, max] = data[0].split(' ').map(Number);

let result = 0;

const nums = data[1].split(' ').map(Number);

for(let i = 0; i < nums.length - 2; i++){
    for(let j = i + 1; j < nums.length - 1; j++){
        for(let k = j + 1; k < nums.length; k++){
            const nowValue = nums[i] + nums[j] + nums[k]
            if(nowValue > max){
                continue;
            }

            if(nowValue < min){
                continue;
            }

            if(result < nowValue){
                result = nowValue
            } else {
                continue;
            }
        }
    }
}

console.log(result)


