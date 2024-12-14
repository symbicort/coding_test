const example = require('fs').readFileSync('example.txt').toString().trim().split('\n');

const [line, length] = example[0].split(' ').map(Number)

const chess = ['WBWBWBWB', 'BWBWBWBW']

let result = [];

for(let i = 1; i <= line - 7; i++){
    // 세로로 자름
    const split = example.slice(i, i + 8)

    // 가로로 자른 뒤 틀린 부분 계산이 필요
    for(let j = 0; j < length - 7; j++){
        let first = ''
        // 세로 줄 계산
        for(let k = 0; k < 8; k++){
            const data = split[k].slice(j, j + 7)
            
        }
            
    }
    
    // split.forEach((data, index) => {
    //     for(let j = 0; j < data.length - 8; j++){
    //         const splitData = data.slice(j, j + 8)
    //     }
    // })

}