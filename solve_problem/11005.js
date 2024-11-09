const fs = require("fs");
let [num, divider] = fs.readFileSync("example.txt").toString().trim().split(" ");

for(data of num){
    console.log(data)
}

