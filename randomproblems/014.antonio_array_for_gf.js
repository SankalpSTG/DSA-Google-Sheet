function solvePositiveBalance(arr1, arr2, balance, k){
    arr1.sort((a, b) => b - a)
    arr2.sort((a, b) => a - b)
    var leftCount = 0
    var rightCount = 0
    for(var i = 0; i < arr1.length; i++){
        if(balance > arr1[i]){
            balance -= arr1[i]
            arr1[i] = 0
            leftCount += 1
        }else{
            leftCount += 1
            break
        }
        if(balance > k - arr2[i]){
            balance -= k - arr2[i]
            arr2[i] = k
            rightCount += 1
        }else{
            rightCount += 1
            break
        }
    }
    newLeftCount = 0
    newRightCount = 0
    for(var i = 0; i < arr1.length; i++){
        if(arr1[i] > k){
            if(leftCount > newLeftCount){
                newLeftCount += 1
            }else{
                newLeftCount += 2
            }
        }
        if(arr2[i] > k){
            if(rightCount > newRightCount){
                newRightCount += 1
            }else{
                newRightCount += 2
            }
        }
    }
    return leftCount + rightCount + newLeftCount + newRightCount
}
function solve(arr, n, k){
    var arr1 = []
    var arr2 = []
    for(var i = 0; i < n/2; i++){
        arr1.push(arr[i])
    }
    for(var i = (n/2) + 1; i < n; i++){
        arr2.push(arr[i])
    }
    var sum1 = arr1.reduce((total, curr) => total + curr, 0)
    var sum2 = arr2.reduce((total, curr) => total + curr, 0)
    var balance = sum1 - sum2
    return balance > 0 ? solvePositiveBalance(arr1, arr2, balance, k) : solvePositiveBalance(arr2, arr1, -balance, k)
}
function driver(){
    var arr = [1, 7, 0, 3, 4, 9]
    var n = arr.length
    var k = 4
    console.log(solve(arr, n, k))
}
driver()