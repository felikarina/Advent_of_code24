let data = `MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX`

let tableau = data.split("\n").map(line => line.split(""))
let tableauV2 = data.split("\n").map(line=>line.split(" "))
let tableauVerti = []
let line = []
let count = 0
let regex = /XMAS/g
let regex2 = /SAMX/g

//compter les occurences verticales
for(let x=0; x<tableauV2.length; x++){
    text = tableauV2[x].toString()
    if(text.match(regex)){
        count++
    }
    if(text.match(regex2)){
        count++
    }
}

//compter les occurences horizontales
for(let y=0; y<tableau[0].length; y++){
    for(let z=0; z<tableau.length; z++){
    line.push(tableau[z][y])
    }
    line = line.join("")
    tableauVerti.push(line)
    line = []
}

for(let x=0; x<tableauVerti.length; x++){
    text = tableauV2[x].toString()
    if(text.match(regex)){
        count++
    }
    if(text.match(regex2)){
        count++
    }
}

console.log(count)
