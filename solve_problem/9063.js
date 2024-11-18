const data = require('fs').readFileSync('example.txt').toString().trim().split('\n')

let minwidth = 0;
let maxwidth = 0;
let minheight = 0;
let maxheight = 0;

for(let i = 1; i <= Number(data[0]); i++){
    const [width, height] = data[i].split(' ').map(Number)

    if(i == 1){
        minwidth = width
        maxwidth = width
        minheight = height
        maxheight = height
        continue;
    }
    
    if(width > maxwidth) maxwidth = width
    if(width < minwidth) minwidth = width
    if(height > maxheight) maxheight = height
    if(height < minheight) minheight = height
}

if(Number(data[0]) < 2){
    console.log(0)
} else {
    console.log((maxwidth - minwidth) * (maxheight - minheight))

}



