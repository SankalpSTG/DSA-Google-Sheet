function driver(arr, X, Y){
    if(X == Y) return -1
    arr[X - 1] -= 1
    arr[Y - 1] -= 1
    var count = 0
    for(var i = 1; i <= arr[X - 1] && i <= arr[Y - 1]; i++){
        if(arr[X-1] % i == 0 && arr[Y-1] % i == 0) count += 1
    }
    return count
}
function main(){
    var arr = [2, 5, 3]
    var X = 2, Y = 3
    console.log(driver(arr, X, Y))
}
main()