function solve(N){
    var arr = []
    for(var i = 1; i <= N; i++){
        arr.push(i)
    }
    var currentWandHolder = 1
    while(arr.length > 1){
        if(currentWandHolder == arr.length){
            arr.splice(0, 1)
        }else{
            arr.splice(currentWandHolder, 1)
        }
        currentWandHolder += N - arr.length + 1
        if(currentWandHolder > arr.length){
            currentWandHolder = currentWandHolder % arr.length
        }
    }
    return arr[0]
}
function driver(){
    var testCases = [10, 2]
    for(var i = 0; i < testCases.length; i++){
        console.log(solve(testCases[i]))
    }
}
driver()