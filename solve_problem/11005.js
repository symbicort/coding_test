const fs = require("fs");
let [num, divider] = fs.readFileSync("example.txt").toString().trim().split(" ");

for(num1 of num){
    console.log(num1)
}

