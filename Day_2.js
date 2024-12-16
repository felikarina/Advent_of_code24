let data = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`

const tableau = data2.split("\n").map(ligne => ligne.split(" ").map(Number))
let tableauV2 = []

function tri_ecart(){
    for(let x = 0; x<tableau.length; x++){
        for(let y = 0; y<tableau[x].length; y++){
            if (Math.abs(tableau[x][y]-tableau[x][y+1])>3){
                tableau[x].push("nope")
            }
        }
    }
    return tableau
}

function tri_croissant(){
    let croiss = true
    let decroiss = true
    for(let b = 0; b<tableauV2.length; b++){
        for(let c = 0; c<tableauV2[b].length; c++){
            if(tableauV2[b][c] >= tableauV2[b][c+1]){
                croiss = false
            }
            if(tableauV2[b][c] <= tableauV2[b][c+1]){
                decroiss = false
            }
        }
        if (croiss == false && decroiss == false){
            tableauV2[b].push("nope")       
        }
        croiss = true
        decroiss = true
    }
    return tableauV2
}

function tri_final(){
    for(let a = 0; a<tableau.length; a++){
        if(!tableau[a].includes("nope")){
            tableauV2.push(tableau[a])
        }
    }
    return tableauV2
}
let tableauV3 = []
function tri_final2(){
    for(let a = 0; a<tableauV2.length; a++){
        if(!tableauV2[a].includes("nope")){
            tableauV3.push(tableauV2[a])
        }
    }
    return tableauV3
}

tri_ecart()
tri_final()
tri_croissant()
tri_final2()

console.log(tableauV3.length)

