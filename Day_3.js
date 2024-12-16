let data = `xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))`

const regex = /mul\((\d+),(\d+)\)/g
const matches = data2.match(regex)
    const sequences = []
if (matches) {
    matches.forEach(match => {
        const [, num1, num2] = match.match(/(\d+),(\d+)/)
        sequences.push(num1,num2)
    })
    }

let result = 0
for(let x=0; x<(sequences.length); x+=2){
    result += (sequences[x]*sequences[x+1])
}
console.log(result)