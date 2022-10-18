var readline = require('readline');
const { stdin, stdout } = require('node:process');
const rl = readline.createInterface({ input: stdin, output:stdout });

var lines = []

function solve(n, arr){
    var workDays = []
    var allowedSubjects = [1, 2]
    for(var i = 0; i < arr.length - 1; i++){
        if(arr[i] == 3){
            if(arr[i + 1] == 3){
                workDays.push(allowedSubjects[0] == 0? 2 : 1)
                allowedSubjects[0] = allowedSubjects[0] == 0? 1 : 0
                allowedSubjects[1] = allowedSubjects[1] == 0? 2 : 0
            }else if(arr[i + 1] == 2){
                if(allowedSubjects[0] == 0){
                    workDays.push(0)
                    allowedSubjects[0] = 1
                    allowedSubjects[1] = 2
                }else{
                    workDays.push(allowedSubjects[0])
                    allowedSubjects[0] = 0
                    allowedSubjects[1] = 2
                }
            }else if(arr[i + 1] == 1){
                if(allowedSubjects[1] == 0){
                    workDays.push(0)
                    allowedSubjects[0] = 1
                    allowedSubjects[1] = 2
                }else{
                    workDays.push(allowedSubjects[1])
                    allowedSubjects[0] = 1
                    allowedSubjects[1] = 0
                }
            }
        }else if (arr[i] == 2){
            if(arr[i + 1] == 2){
                workDays.push(0)
                allowedSubjects[0] = 1
                allowedSubjects[1] = 2
            }else{
                if(allowedSubjects[arr[i] - 1] != 0){
                    workDays.push(arr[i])
                    allowedSubjects[0] = arr[i] == 1?0:1
                    allowedSubjects[1] = arr[i] == 2?0:2
                }else{
                    workDays.push(0)
                    allowedSubjects[0] = 1
                    allowedSubjects[1] = 2
                }
            }
        }else if(arr[i] == 1){
            if(arr[i + 1] == 1){
                workDays.push(0)
                allowedSubjects[0] = 1
                allowedSubjects[1] = 2
            }else{
                if(allowedSubjects[arr[i] - 1] != 0){
                    workDays.push(arr[i])
                    allowedSubjects[0] = arr[i] == 1?0:1
                    allowedSubjects[1] = arr[i] == 2?0:2
                }else{
                    workDays.push(0)
                    allowedSubjects[0] = 1
                    allowedSubjects[1] = 2
                }
            }
        }else{
            workDays.push(0)
            allowedSubjects[0] = 1
            allowedSubjects[1] = 2
        }
    }
    if(arr[arr.length - 1] == 3){
        workDays.push(allowedSubjects[0] == 0? 2 : 1)
    }else if(arr[arr.length - 1] == 2){
        workDays.push(allowedSubjects[1] == 0? 0 : 2)
    }else if(arr[arr.length - 1] == 1){
        workDays.push(allowedSubjects[0] == 0? 0 : 1)
    }else if(arr[arr.length - 1] == 0){
        workDays.push(0)
    }
    var maxRelax = 0
    workDays.map(value => {
        if(value == 0) maxRelax += 1
    })
    return maxRelax
}

function driver(lines){
    var n = Number(lines[0])
    var arr = lines[1].split(" ").map(Number)
    console.log(solve(n, arr))
}

rl.on("line", (input) => {
    lines.push(input)
    if(lines.length == 2){
        rl.close()
        driver(lines)
    }
})

