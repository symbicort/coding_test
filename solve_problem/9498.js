let input = Number(require('fs').readFileSync('example.txt').toString().trim());

if(90 <= input && input <= 100){
    console.log("A");
} else if(80 <= input && input <= 89){
    console.log("B");
} else if(70 <= input  && input <= 79){
    console.log("C");
} else if(60 <= input  && input <= 69){
    console.log("D");
} else {
    console.log("F");
}

// 연속 연산이 안된걸 모르고 아래와 같이 작성
// if(90 <= input <= 100){
//     console.log("A");
// } else if(80 <= input <= 89){
//     console.log("B");
// } else if(70 <= input <= 79){
//     console.log("C");
// } else if(60 <= input <= 69){
//     console.log("D");
// } else {
//     console.log("F");
// }

