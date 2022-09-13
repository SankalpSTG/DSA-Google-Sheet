function solve(arr){
    var cores = []
    arr.sort((a, b) => a[0] - b[0])
    var i = 0
    while(i < arr.length){
        var jobFinished = false
        for(var j = 0; j < cores.length; j++){
            if(cores[j] <= arr[i][0]){
                cores[j] = arr[i][1]
                jobFinished = true
                break
            }
        }
        if(jobFinished == false){
            cores.push(arr[i][1])
        }
        i += 1
    }
    return cores.length
}
function driver(){
    var arr = [
        [1, 2],
        [1, 3],
        [2, 3],
        [4, 5]
    ]
    console.log(solve(arr))
}
driver()