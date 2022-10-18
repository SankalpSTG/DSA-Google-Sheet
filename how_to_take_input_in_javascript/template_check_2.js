var readline = require('readline');
const { stdin, stdout } = require('node:process');
const rl = readline.createInterface({ input: stdin, output:stdout });

//All the input lines
var lines = []


//This function only solves the problem with given input
function solve(arr, n){
    console.log(arr, n)
}

//This function parses raw input into useful data structure
function driver(lines){
    var n = Number(lines[0])
    if(lines.length < n + 1) return
    var arr = []
    for(var i = 1; i < lines.length; i++){
        arr.push(lines[i].split(" ").map(Number))
    }
    solve(arr, n)
}

//This function is responsible to take input from console
rl.on("line", (input) => {
    lines.push(input)
    driver(lines)
})

var x = "bB bbbbaAA"
