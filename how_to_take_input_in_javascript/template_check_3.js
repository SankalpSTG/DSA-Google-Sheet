var readline = require('readline');
const { stdin, stdout } = require('node:process');
const rl = readline.createInterface({ input: stdin, output:stdout });

var length = -1
var lines = []

function CounttoZeros(A) {
    let count = 0;
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < A.length; j++) {
            if (A[i][j] == 0) {
                count++;
            }
        }
    }
    return count;
}
    
function driver(lines){
    var arr = []
    arr = lines.map(line => {
        return line.split(" ").map(Number)
    })
    console.log(CounttoZeros(arr))
}

function checkLength(line){
    line = line.split(" ")
    return line.length
}

rl.on("line", (input) => {
    lines.push(input)
    if(length == -1){
        length = checkLength(lines[0]) - 1 
    }else if (length == 0){
        rl.close()
        driver(lines)
    }
    length -= 1
})

