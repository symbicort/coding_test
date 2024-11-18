let data = Number(require('fs').readFileSync('example.txt').toString().trim())

while(data > 1){
    for(let i = 2; i <= data; i++){
        if(data % i === 0){
            console.log(i)
            data = (data / i)
            break;
        }
    }
}

// 마지막에 2 / 2 해서 1되어야 하는걸 for문을 잘못씀


