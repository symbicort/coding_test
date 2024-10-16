let [cur,tak] = require('fs').readFileSync('example.txt').toString().trim().split('\n');

let [hour, min] = cur.split(' ').map(Number);

tak = Number(tak)

if(min + tak >= 60){
    hour += Math.floor((tak + min) / 60)
    min = (tak + min) % 60
    if(hour >= 24){
        hour = hour - 24
    }
    console.log(hour, min)
} else {
    console.log(hour, min+tak)
}