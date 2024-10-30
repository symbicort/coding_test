function solution(data) {
    const answer = [];
    const width = [];
    const height = []
    for(let i = 0; i < data.length; i++){
        for(let j = 0; j < data[i].length; j++){
            if(data[i][j] === "#"){
                const examp = [];
                height.push(i)
                width.push(j)
            }
        }
    }

    return [Math.min(...height), Math.min(...width), Math.max(...height) + 1, Math.max(...width) + 1]
}

const data = [".##...##.", "#..#.#..#", "#...#...#", ".#.....#.", "..#...#..", "...#.#...", "....#...."]

solution(data)