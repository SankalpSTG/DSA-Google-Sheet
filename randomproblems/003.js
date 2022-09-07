function driver(numbers, N){
    var totalTime = 0
    for(var i = 0; i < N; i++){
        var isShifted = 0
        for(var j = i; j < N; j++){
            if(numbers[j] > numbers[j+1]){
                isShifted = 1
                numbers[j] = 0
                numbers[j+1] = 1
            }
        }
        if(!isShifted) break
        totalTime += isShifted
    }
    return totalTime
}
function main(){
    var numbers = [0, 1, 0, 0, 1, 0, 1, 0]
    var N = 8
    console.log(driver(numbers, N))
}
main()
