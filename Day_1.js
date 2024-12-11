const list = `3   4
4   3
2   5
1   3
3   9
3   3`
const lines = list.split('\n')
let line1 = []
let line2 = []

lines.forEach(line => {
    const numbers = line.trim().split(/\s+/)
    if (numbers.length === 2){
        line1.push(Number(numbers[0]))
        line2.push(Number(numbers[1]))
    } 
})

line1 = line1.sort()
line2 = line2.sort()

let distance = 0
function addition() {
    for(let x = 0; x<line1.length; x++){
        distance = distance+(Math.abs(line1[x]-line2[x]))
    }
    return distance
}

//PART TWO

