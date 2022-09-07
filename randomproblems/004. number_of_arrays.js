function driver(arr, N){
    var total = 1
    for(var i = 0; i < N; i++){
        total *= (arr[i] - i)
    }
    return total
}

function main(){
    var arr = [2, 3]
    var N = 2
    console.log(driver(arr, N))
}

main()