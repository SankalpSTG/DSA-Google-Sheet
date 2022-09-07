function driver(arr, n){
    var newarr = []
    var i = 0
    var j = n - 1
    while(i <= j){
        if(arr[i] > arr[j]){
            newarr.push(arr[i])
            i += 1
        }else{
            newarr.push(arr[j])
            j -= 1
        }
    }
    return newarr
}
function main(){
    var arr = [3, 1, 2, 9, 6, 4, 5, 8, 7]
    var n = arr.length
    console.log(driver(arr, n))
}
main()