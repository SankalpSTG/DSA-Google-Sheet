var readline = require('readline');
const { stdin, stdout } = require('node:process');
const rl = readline.createInterface({ input: stdin, output:stdout });

//All the input lines
var lines = []


//This function only solves the problem with given input
function solve(){

}

//This function parses raw input into useful data structure
function driver(lines){
    var arr = lines[0].split(" ")
    console.log(arr)
    var jewels = arr[2].split("\"")
    console.log(jewels)
    var stones = arr[5].split("\"")
    console.log(stones)
    jewels = jewels[1]
    stones = stones[1]
    // var jewels = arr[0]
    // var stones = arr[1]
    console.log(`jewels : ${jewels} & stones : ${stones}`)
}

//This function is responsible to take input from console
rl.on("line", (input) => {
    lines.push(input)
    rl.close()
    driver(lines)
})

var x = "bB bbbbaAA"
