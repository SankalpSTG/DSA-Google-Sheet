function solve(A, M, K){
    var arr = []
    var maxLength = 0
    var unSpecialArray = new Array(110)
    for(var i = 0; i < M.length; i++){
        unSpecialArray[M[i]] = 1
    }
    for(var i = 0; i < A.length; i++){
        arr.push(unSpecialArray[A[i]] == 1)
    }
    var i = 0
    var j = 0
    while(j < arr.length){
        if(arr[j] == true && K >= 0){
            K -= 1
            j += 1
            continue
        }else if(K >= 0){
            j += 1
        }
        if(K < 0){
            if(arr[i] == true){
                K += 1
            }
            i += 1
            continue
        }
        if(j - i > maxLength){
            maxLength = j - i
        }
    }
    return maxLength
    // [ false, true, true, true, false ]
    // // Step 1: if current element is true
    // //             if K >= 0
    // //                 include current element
    // // Step 2: if K < 0
    // //             if i == true
    // //                 K += 1
    // //             i += 1
}
function driver(){
    var A = [1, 2, 3, 2, 5]
    var M = [3, 2]
    var K = 2
    console.log(solve(A, M, K))
}

driver()