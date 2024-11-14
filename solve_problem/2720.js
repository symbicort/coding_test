const fs = require("fs");
let data = fs.readFileSync("example.txt").toString().trim().split("\n").map(Number);

const quarter = 25;
const dime = 10;
const nickel = 5;
const penny = 1

for(let i = 1; i <= data[0]; i++){
    const result = [0,0,0,0]
    let money = data[i];
    while(money > 0){
        if(money / quarter != 0){
            const divide = Math.floor(money / quarter)
            money -= divide * quarter
            result[0] = `${divide}`
        }

        if(money / dime != 0){
            const divide = Math.floor(money / dime)
            money -= divide * dime
            result[1] = `${divide}`
        }

        if(money / nickel != 0){
            const divide = Math.floor(money / nickel)
            money -= divide * nickel
            result[2] = `${divide}`
        }

        if(money / penny != 0){
            const divide = Math.floor(money / penny)
            money -= divide * penny
            result[3] = `${divide}`
        }
    }
    console.log(`${result[0]} ${result[1]} ${result[2]} ${result[3]}`)
}

