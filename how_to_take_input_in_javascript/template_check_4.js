// First-line contains T.
// First line of each test case consists of a three space separated integers integer Q, L and R.
// Next Q lines of each test case consists of two space separated integers X and Y.
// Output Format

var readline = require('readline');
const { stdin, stdout } = require('node:process');
const rl = readline.createInterface({ input: stdin, output:stdout });

//All the input lines
var T = null
var Q = null, L = null, R = null
var lines = []


//This function only solves the problem with given input
function solve(){

}

//This function parses raw input into useful data structure
function driver(){
    console.log(`Test Cases : ${T}`)
    console.log(`Q, L, R : ${Q}, ${L}, ${R}`)
    console.log(`Q Lines:`)
    console.log(lines)
}

//This function is responsible to take input from console
rl.on("line", (input) => {
    if(T == null){
        T = parseInt(input, 10)
    }else if(Q == null || L == null || R == null){
        var arr = input.split(" ").map(Number)
        Q = arr[0]
        L = arr[1]
        R = arr[2]
    }else if(Q > 0){
        var arr = input.split(" ").map(Number)
        lines.push({X: arr[0], Y:arr[1]})
        Q -= 1
    }
    if(Q == 0){
        rl.close()
        driver()
    }
})

