
function solve(arr){
    var newArr = []
    for(var i = 0; i < arr.length; i++){
        newArr.push(...arr[i])
    }
    return newArr
}
function driver(){
    var arr = [[5, 7, 8, 30], [10, 20], [19, 22, 50], [28, 35, 40, 45]]
    console.log(solve(arr))
}
driver()