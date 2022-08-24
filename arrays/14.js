function AlternatingaMaxLength(arr,n){
    if(arr.length <= 2) return arr.length
    var solnArray = [arr[0]]
    var i = 1
    var direction = arr[0] > arr[1]?0:1
    while(i < arr.length){
        var curArray = []
        while(i < arr.length){
            if(direction == 0){
                if(arr[i] <= arr[i - 1])curArray.push(arr[i])
                else break
            }else{
                if(arr[i] >= arr[i - 1])curArray.push(arr[i])
                else break
            }
            i += 1
        }
        solnArray.push(curArray)
        direction = direction == 1 ? 0 : 1
    }
    return solnArray.length
}

console.log(AlternatingaMaxLength([10, 12, 12, 6, 11, 11, 10, 12, 3, 4], 10))