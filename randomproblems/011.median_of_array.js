function driver2(arr, n){
    arr.sort((a, b) => b - a)
    arr.splice(0, 1)
    var medianPosition = (arr.length + 1) / 2
    return arr[medianPosition - 1]
}
function driver(arr, n){
    arr.sort((a, b) => b - a)
    var median = ((arr.length - 1) + 1) / 2
    return arr[median]
}
function main(){
    var arr = [5, 1, 2, 4, 3, 8]
    var n = arr.length
    console.log(driver(arr, n))
}

main()